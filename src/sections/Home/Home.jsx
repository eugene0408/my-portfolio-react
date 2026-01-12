import { useContext, forwardRef } from "react";
import { ThemeContext } from "../../App";
import { motion, AnimatePresence } from "framer-motion";

// Images
import DownloadIcon from "../../assets/icons/document.svg?react";

// Components
import { AccentButton, CVButton, CVIcon } from "../../components";

// Styles
import { PageWrapper, Container } from "../Pages.styles";
import {
  HomeGrid,
  HeaderWrapper,
  HeaderTitle,
  AvatarWrapper,
  ThemeImageWrapper,
  ScrollDownWrapper,
  ScrollLink,
  DownArrow,
  // AvatarBgWrapper,
} from "./Home.styles";

// Animations
import {
  sunMoonAnimation,
  imageAnimation,
  // imageBgAnimation,
  textAnimation,
} from "./Home.animations";

export const Home = forwardRef(({ scrollToSection }, ref) => {
  const { theme, changeTheme } = useContext(ThemeContext);

  return (
    <PageWrapper id="s-home" ref={ref}>
      <Container>
        <HomeGrid>
          <HeaderWrapper as={motion.div} initial="hidden" whileInView="visible">
            <HeaderTitle>
              <motion.h2 variants={textAnimation} custom={1}>
                Hi,
              </motion.h2>
              <motion.h2 variants={textAnimation} custom={2}>
                I'm Eugene,
              </motion.h2>
              <motion.h2 variants={textAnimation} custom={3}>
                Web developer
              </motion.h2>
            </HeaderTitle>

            <AccentButton
              onClick={() => scrollToSection("s-contacts")}
              as={motion.button}
              variants={textAnimation}
              custom={5}
            >
              Contact me
            </AccentButton>

            <CVButton as={motion.button} variants={textAnimation} custom={6}>
              <CVIcon>
                <DownloadIcon />
              </CVIcon>
              Download CV
            </CVButton>
          </HeaderWrapper>

          <ThemeImageWrapper
            onClick={() => {
              changeTheme(theme === "dark" ? "light" : "dark");
            }}
          >
            <AnimatePresence>
              {theme === "light" && (
                <motion.div
                  key={"light"}
                  variants={sunMoonAnimation}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <motion.img
                    src={"./images/homepage/sun.webp"}
                    alt="sun"
                    animate={{ rotate: 360 }}
                    transition={{
                      repeat: Infinity,
                      duration: 8,
                      ease: "linear",
                    }}
                  />
                </motion.div>
              )}
              {theme === "dark" && (
                <motion.div
                  key={"dark"}
                  variants={sunMoonAnimation}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <motion.img
                    src={"./images/homepage/moon.webp"}
                    alt="moon"
                    animate={{ rotate: 360 }}
                    transition={{
                      repeat: Infinity,
                      duration: 8,
                      ease: "linear",
                    }}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </ThemeImageWrapper>

          <AvatarWrapper
            as={motion.div}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
          >
            {/* <AvatarBgWrapper
              as={motion.div}
              variants={imageBgAnimation}
              initial="hidden"
              whileInView="visible"
            >

            </AvatarBgWrapper>*/}
            <motion.img
              src={"./images/homepage/main.png"}
              alt="avatar"
              variants={imageAnimation}
              custom={1}
            />
          </AvatarWrapper>
        </HomeGrid>
      </Container>

      {/* Next section button */}
      <ScrollDownWrapper>
        <ScrollLink onClick={() => scrollToSection("s-skills")}>
          <DownArrow
            as={motion.div}
            initial={{
              rotate: -45,
              scale: 1,
            }}
            animate={{
              rotate: -45,
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 1.5,
              ease: "linear",
              repeat: Infinity,
            }}
          />
        </ScrollLink>
      </ScrollDownWrapper>
    </PageWrapper>
  );
});
