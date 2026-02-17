import { useState, useEffect, forwardRef, useRef } from "react";
import { motion } from "framer-motion";
import { useScreenSize } from "../../hooks/useScreenSize";

import {
  PortfolioCategorySelect,
  PortfolioItem,
  PortfolioPagination,
} from "../../components";

import { PageWrapper, PageHeader } from "../Pages.styles";
import { headerAnimation } from "../Pages.animations";

import { PortfolioContainer, PortfolioWrapper } from "./Portfolio.styles";

import { bounceIn } from "../../animations";

export const Portfolio = forwardRef(
  ({ setHovered, scrollToSection, currentSection, portfolioData }, ref) => {
    // Categories for filter
    const categoriesList = ["react", "js"];
    // Current category
    const [portfolioCategory, setPortfolioCategory] = useState(
      categoriesList[0],
    );
    // Current page
    const [curPortfolioPage, setCurPortfolioPage] = useState(1);
    // Scroll direction when category changed
    const [categoryScrolledBack, setCategoryScrolledBack] = useState(false);
    // Touch states
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);
    // Preloaded slides
    const [loadedSlides, setLoadedSlides] = useState([]);

    const isScrollingRef = useRef(false);

    useEffect(() => {
      // Get data array and return it with loaded images
      const loadedSlides = portfolioData.map((slide) => {
        // Preload images
        const desktopImage = new Image();
        desktopImage.src = slide.desktop;
        const mobileImage = new Image();
        mobileImage.src = slide.mobile;
        // Replase src with loaded images
        return { ...slide, desktop: desktopImage, mobile: mobileImage };
      });

      setLoadedSlides(loadedSlides);
    }, []);

    const filterByCategory = () => {
      const filtered = loadedSlides.filter(
        (item) => item.category === portfolioCategory,
      );
      return filtered;
    };

    const filteredItems = filterByCategory();

    /** ---------- Pagination
   ----------------------------------------------*/
    const isDesktop = useScreenSize() === "desktop";
    const isTablet = useScreenSize() === "tablet";
    const itemsPerScreen = () => (!isDesktop && !isTablet ? 1 : 2);
    const indexOfLastItem = curPortfolioPage * itemsPerScreen();
    const indexOfFirstItem = indexOfLastItem - itemsPerScreen();

    const itemsToDisplay = filteredItems.slice(
      indexOfFirstItem,
      indexOfLastItem,
    );
    const totalItems = filteredItems.length;
    // Array of numbers from 1 to screens amount
    const totalScreens = Array.from(
      { length: Math.ceil(totalItems / itemsPerScreen()) },
      (_, i) => i + 1,
    );

    useEffect(() => {
      // Reset page and category
      setPortfolioCategory(categoriesList[0]);
      setCurPortfolioPage(1);
    }, [currentSection]);

    useEffect(() => {
      // Start from last page if scrolled back
      const lastPage = totalScreens.length;
      if (categoryScrolledBack) {
        setTimeout(() => {
          setCurPortfolioPage(lastPage);
          setCategoryScrolledBack(false);
        }, 10);
      }
    }, [categoryScrolledBack]);

    const onHoverHandler = () => {
      setHovered(true);
    };
    const onLeaveHandler = () => {
      setHovered(false);
    };

    // Detect touch device
    // const isTouchDevice = () => {
    //   try {
    //     document.createEvent("TouchEvent");
    //     return true;
    //     // eslint-disable-next-line no-unused-vars
    //   } catch (e) {
    //     return false;
    //   }
    // };

    //** ------  Portfolio Navigation  --------------*/

    const numberOfScreens = totalScreens.length;
    const curCategoryIndex = categoriesList.findIndex(
      (category) => category === portfolioCategory,
    );
    const isLastCategory =
      portfolioCategory === categoriesList[categoriesList.length - 1];
    const isFirstCategory = portfolioCategory === categoriesList[0];

    // Scroll to another section
    const scrollToNextSection = (section) => {
      setTimeout(() => {
        setHovered(false);
        scrollToSection(section);
      }, 300);
    };
    // Switch between portfolio categories
    const switchToNextCategory = () => {
      setTimeout(() => {
        setPortfolioCategory(categoriesList[curCategoryIndex + 1]);
        setCurPortfolioPage(1); //start from first page
      }, 10);
    };

    const switchToPrevCategory = () => {
      setTimeout(() => {
        setPortfolioCategory(categoriesList[curCategoryIndex - 1]);
        setCategoryScrolledBack(true);
      }, 10);
    };

    // Switch pages handler
    const pagesHandler = (mouseWheel = true) => {
      const nextPage = () => {
        switch (true) {
          case curPortfolioPage < numberOfScreens:
            setCurPortfolioPage(curPortfolioPage + 1);
            break;
          case curPortfolioPage === numberOfScreens && !isLastCategory: //switch to next category if scrolled to an end
            switchToNextCategory();
            break;
          default:
            mouseWheel
              ? scrollToNextSection("s-contacts") // go to next section if scrolled to last item
              : setCurPortfolioPage(1);
            setPortfolioCategory(categoriesList[0]);
        }
      };
      const prevPage = () => {
        switch (true) {
          case curPortfolioPage > 1:
            setCurPortfolioPage(curPortfolioPage - 1);
            break;
          case curPortfolioPage === 1 && !isFirstCategory: //switch to prewious category if scrolled to an end
            switchToPrevCategory();
            break;
          default:
            mouseWheel && scrollToNextSection("s-skills"); // go to prew section if scrolled to last item
        }
      };

      return {
        next: nextPage,
        prev: prevPage,
      };
    };

    // Switch pages by mouse wheel
    const onWheelHandler = (e) => {
      if (isScrollingRef.current) return;

      const isScrollingUp = e.deltaY < 0;
      const isScrollingDown = e.deltaY > 0;

      isScrollingRef.current = true;

      const { next, prev } = pagesHandler();

      if (isScrollingDown) next();
      if (isScrollingUp) prev();

      setTimeout(() => {
        isScrollingRef.current = false;
      }, 500);
    };

    // Switch pages on touchscreen

    // the required distance between touchStart and touchEnd to be detected as a swipe
    const minSwipeDistance = 50;

    const onTouchStartHandler = (e) => {
      setTouchEnd(null);
      setTouchStart({
        x: e.targetTouches[0].clientX,
        y: e.targetTouches[0].clientY,
      });
      setHovered(true); //stop page scroll
    };

    const onTouchMoveHandler = (e) =>
      setTouchEnd({
        x: e.targetTouches[0].clientX,
        y: e.targetTouches[0].clientY,
      });

    const onTouchEndHandler = () => {
      if (!touchStart || !touchEnd) return;
      const deltaX = touchStart.x - touchEnd.x;
      const deltaY = touchStart.y - touchEnd.y;

      const absX = Math.abs(deltaX);
      const absY = Math.abs(deltaY);

      const { next, prev } = pagesHandler(false);

      if (absX > absY && absX > minSwipeDistance) {
        // horizontal swipe
        if (deltaX > 0) {
          next();
        } else {
          prev();
        }
      }

      if (absY > absX && absY > minSwipeDistance) {
        // vertical swipe
        if (deltaY > 0) {
          scrollToNextSection("s-contacts");
        } else {
          scrollToNextSection("s-skills");
        }
      }
    };

    return (
      <PageWrapper id="s-portfolio" ref={ref}>
        {/* <ImagePreloader imageUrls={imageUrls()}/> */}

        <PortfolioContainer>
          <PageHeader
            as={motion.h2}
            variants={bounceIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.9 }}
          >
            {" "}
            My Projects{" "}
          </PageHeader>
          <PortfolioCategorySelect
            curCategory={portfolioCategory}
            setCategory={setPortfolioCategory}
            categoriesList={categoriesList}
            setPage={setCurPortfolioPage}
          />
          <PortfolioWrapper
            onMouseEnter={() => onHoverHandler()}
            onMouseLeave={() => onLeaveHandler()}
            onWheel={(e) => {
              onWheelHandler(e);
            }}
            onTouchStart={(e) => onTouchStartHandler(e)}
            onTouchMove={(e) => onTouchMoveHandler(e)}
            onTouchEnd={(e) => onTouchEndHandler(e)}
          >
            {/* Portfolio items  */}
            {itemsToDisplay.map((item, localIndex) => {
              const globalIndex = localIndex + indexOfFirstItem;
              return (
                <PortfolioItem
                  key={item.title}
                  title={item.title}
                  desktop={item.desktop.src}
                  mobile={item.mobile.src}
                  descr={item.descr}
                  tags={item.tags}
                  website={item.website}
                  repo={item.repo}
                  index={globalIndex}
                  curPage={curPortfolioPage}
                  itemsPerScreen={itemsPerScreen}
                  curSection={currentSection}
                />
              );
            })}

            {/* Pagination */}
            <PortfolioPagination
              curScreen={curPortfolioPage}
              setCurScreen={setCurPortfolioPage}
              totalScreens={totalScreens}
            />
          </PortfolioWrapper>
        </PortfolioContainer>
      </PageWrapper>
    );
  },
);
