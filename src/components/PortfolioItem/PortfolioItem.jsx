import { motion, AnimatePresence } from "framer-motion";

import { useScreenSize } from "../../hooks/useScreenSize";

import InternetIcon from "../../assets/icons/internet.svg?react";
import GitHubIcon from "../../assets/icons/skills/github.svg?react";
import LeftArrowIcon from "../../assets/icons/up-left-arrow.svg?react";
import RightArrowIcon from "../../assets/icons/up-right-arrow.svg?react";

import {
  Wrapper,
  ScreensWrapper,
  ScreensContainer,
  DescrWrapper,
  DesctopScreen,
  Title,
  Description,
  MobileScreen,
  Tags,
  LinksWrapper,
  LinkArrowWrapper,
  LinkItem,
} from "./PortfolioItem.styles";

import {
  wrapperAnimation,
  bigScreenAnimation,
  smallScreenAnimation,
  titleAnimation,
  tagAnimation,
  textAnimation,
  linksAnimation,
  linkArrowAnimation,
  staggerItemsAnimation,
} from "./PortfolioItem.animations";

const LinksGroup = ({ website, repo, isActive }) => (
  <LinksWrapper as={motion.div}>
    <LinkItem
      as={motion.a}
      href={website}
      variants={linksAnimation}
      custom={1}
      initial="hidden"
      animate={isActive() ? "visible" : "hidden"}
      whileHover="hover"
      viewport={{ once: false, amount: 0.2 }}
    >
      live <InternetIcon />
      <LinkArrowWrapper as={motion.div} variants={linkArrowAnimation}>
        <LeftArrowIcon />
      </LinkArrowWrapper>
    </LinkItem>

    <motion.span
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      ||
    </motion.span>

    <LinkItem
      as={motion.a}
      href={repo}
      variants={linksAnimation}
      custom={2}
      initial="hidden"
      animate={isActive() ? "visible" : "hidden"}
      whileHover="hover"
      viewport={{ once: false, amount: 0.2 }}
    >
      <GitHubIcon /> repo
      <LinkArrowWrapper as={motion.div} variants={linkArrowAnimation}>
        <RightArrowIcon />
      </LinkArrowWrapper>
    </LinkItem>
  </LinksWrapper>
);

export const PortfolioItem = ({
  desktop,
  mobile,
  descr,
  title,
  tags,
  website,
  repo,
  index,
  curPage,
  itemsPerScreen,
  curSection,
}) => {
  const mediumScreen = useScreenSize() === "medium";
  const tabletScreen = useScreenSize() === "tablet";
  const isMediumScreen = mediumScreen || tabletScreen;
  const isCurrentSection = curSection === "s-portfolio";

  const isActive = () =>
    isCurrentSection &&
    index >= (curPage - 1) * itemsPerScreen() &&
    index < curPage * itemsPerScreen();

  // console.log({
  //   index: index,
  //   perScreen: itemsPerScreen,
  //   curPage: curPage,
  //   curSection: isCurrentSection,
  //   result: isActive(),
  // });

  return (
    <AnimatePresence>
      <Wrapper
        as={motion.div}
        variants={wrapperAnimation}
        initial="hidden"
        animate={isActive() ? "visible" : "hidden"}
        custom={index}
      >
        <ScreensWrapper as={motion.div}>
          <ScreensContainer
            as={motion.div}
            initial="hidden"
            animate={isActive() ? "visible" : "hidden"}
          >
            <DesctopScreen as={motion.div} variants={bigScreenAnimation}>
              <img src={desktop} alt={`${title}`} />
            </DesctopScreen>

            <MobileScreen as={motion.div} variants={smallScreenAnimation}>
              <img src={mobile} alt={`${title}-mobile`} />
            </MobileScreen>
          </ScreensContainer>

          {/* Links buttons tablet screeen */}
          {isMediumScreen && (
            <LinksGroup
              key={`dlinks-${index}`}
              website={website}
              repo={repo}
              isActive={isActive}
            />
          )}
        </ScreensWrapper>

        <DescrWrapper>
          <Title
            as={motion.h3}
            variants={titleAnimation}
            initial="hidden"
            animate={isActive() ? "visible" : "hidden"}
          >
            {title}
          </Title>
          <Tags
            as={motion.div}
            variants={staggerItemsAnimation}
            initial="hidden"
            animate={isActive() ? "visible" : "hidden"}
          >
            {tags.map((tag, index) => (
              <motion.div
                key={`${index}-${title}-${tag}`}
                variants={tagAnimation}
              >
                {tag}
              </motion.div>
            ))}
          </Tags>

          <Description
            as={motion.p}
            variants={textAnimation}
            initial="hidden"
            animate={isActive() ? "visible" : "hidden"}
          >
            {descr}
          </Description>
          {/* Links buttons on desctop & mobile screen resolutions */}
          {!isMediumScreen && (
            <LinksGroup
              key={`mlinks-${index}`}
              website={website}
              repo={repo}
              index={index}
              isActive={isActive}
            />
          )}
        </DescrWrapper>
      </Wrapper>
    </AnimatePresence>
  );
};
