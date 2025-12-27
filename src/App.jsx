import React, { useRef, useState, useEffect } from "react";
import { useLocalStorage } from "./hooks/useLocalStorage";

import { AnimatePresence } from "framer-motion";

// Components
import { Home, Skills, Portfolio, Contacts } from "./sections";
import { SideMenu, Topline } from "./components";
import { SnapScrollContainer } from "./sections/Pages.styles";
import { Loading } from "./components";

// Context
// eslint-disable-next-line react-refresh/only-export-components
export const ThemeContext = React.createContext();
// eslint-disable-next-line react-refresh/only-export-components
export const SectionContext = React.createContext();

function App() {
  // Theme change
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );

  const [currentSection, setCurrentSection] = useState("s-home");

  const [portfolioData, setPortfolioData] = useState([]);
  const [skillsData, setSkillsData] = useState({});

  const [pageLoaded, setPageLoaded] = useState(false);

  // Portfolio scroll pages
  const [curPortfolioPage, setCurPortfolioPage] = useState(1);
  const [portfolioHovered, setPortfolioHovered] = useState(false);

  const getData = () => {
    fetch("data/portfolio.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((portfolioJson) => {
        setPortfolioData(portfolioJson);
        // console.log('portfolio data loaded')
      });

    fetch("data/skills.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((skillsJson) => {
        setSkillsData(skillsJson);
        // console.log('skills data loaded')
      });
  };

  // Preload images of first page
  const preloadImages = (imageUrls) => {
    imageUrls.forEach((url) => {
      const img = new Image();
      img.src = url;
    });
  };

  const imageUrls = [
    "./images/homepage/morda.png",
    "./images/homepage/sun.png",
    "./images/homepage/moon.png",
  ];

  useEffect(() => {
    getData();
    preloadImages(imageUrls);
    setTimeout(() => {
      setPageLoaded(true);
    }, 1500);
  }, []);

  const scrollContainerRef = useRef(null);
  const sectionsRefs = useRef([]);

  const addToRefs = (el) => {
    if (el && !sectionsRefs.current.includes(el)) {
      sectionsRefs.current.push(el);
    }
  };

  // Active section highlight
  const activeSectionCheck = () => {
    sectionsRefs.current.forEach((section) => {
      const sectionTop = section.offsetTop - 50;
      const sectionHeight = section.offsetHeight;
      const sectionBottom = sectionTop + sectionHeight;

      if (
        scrollContainerRef.current.scrollTop >= sectionTop &&
        scrollContainerRef.current.scrollTop < sectionBottom
      ) {
        if (currentSection !== section.id) {
          setCurrentSection(section.id);
        }
      }
    });
  };

  const scrollToSection = (sectionId) => {
    const container = scrollContainerRef.current;
    const section = sectionsRefs.current.find((el) => el.id === sectionId);

    if (section) {
      const sectionTop = section.offsetTop;
      container.scrollTop = sectionTop;
    }
  };

  return (
    <div className="App" data-theme={theme}>
      {!pageLoaded ? (
        <Loading />
      ) : (
        <ThemeContext.Provider
          value={{
            theme: theme,
            changeTheme: setTheme,
          }}
        >
          <SectionContext.Provider
            value={{
              active: currentSection,
            }}
          >
            <Topline />
            <SideMenu
              scrollToSection={scrollToSection}
              setPortfolioHovered={setPortfolioHovered}
            />

            <SnapScrollContainer
              ref={scrollContainerRef}
              $currentSection={currentSection}
              $portfolioHovered={portfolioHovered}
              onScroll={() => activeSectionCheck()}
              onTouchEnd={() => activeSectionCheck()}
            >
              <Home ref={addToRefs} scrollToSection={scrollToSection} />
              {skillsData && Object.keys(skillsData).length > 0 && (
                <Skills ref={addToRefs} skillsData={skillsData} />
              )}
              {portfolioData && portfolioData.length > 0 && (
                <Portfolio
                  ref={addToRefs}
                  curScreen={curPortfolioPage}
                  setCurScreen={setCurPortfolioPage}
                  hovered={portfolioHovered}
                  setHovered={setPortfolioHovered}
                  scrollToSection={scrollToSection}
                  currentSection={currentSection}
                  portfolioData={portfolioData}
                />
              )}
              <Contacts ref={addToRefs} />
            </SnapScrollContainer>
          </SectionContext.Provider>
        </ThemeContext.Provider>
      )}
    </div>
  );
}

export default App;
