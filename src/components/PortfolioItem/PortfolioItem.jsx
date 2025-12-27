import React from "react";
import { motion, AnimatePresence } from "framer-motion";

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

export const PortfolioItem = ({
  desktop,
  mobile,
  descr,
  title,
  tags,
  website,
  repo,
  index,
}) => {
  return (
    <AnimatePresence>
      <Wrapper
        as={motion.div}
        variants={wrapperAnimation}
        initial="hidden"
        whileInView="visible"
        custom={index}
      >
        <ScreensWrapper
          as={motion.div}
          whileHover="hover"
          initial="hidden"
          whileInView="visible"
        >
          <ScreensContainer as={motion.div}>
            <DesctopScreen as={motion.div} variants={bigScreenAnimation}>
              <img src={desktop} alt={`${title}`} />
            </DesctopScreen>

            <MobileScreen as={motion.div} variants={smallScreenAnimation}>
              <img src={mobile} alt={`${title}-mobile`} />
            </MobileScreen>
          </ScreensContainer>
        </ScreensWrapper>
        <DescrWrapper>
          <Title
            as={motion.h3}
            variants={titleAnimation}
            initial="hidden"
            whileInView="visible"
          >
            {title}
          </Title>

          <Tags
            as={motion.div}
            variants={staggerItemsAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
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
            whileInView="visible"
          >
            {descr}
          </Description>

          <LinksWrapper as={motion.div}>
            <LinkItem
              href={website}
              as={motion.a}
              variants={linksAnimation}
              custom={1}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
            >
              live <InternetIcon />
              <LinkArrowWrapper as={motion.div} variants={linkArrowAnimation}>
                <LeftArrowIcon />
              </LinkArrowWrapper>
            </LinkItem>

            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              ||
            </motion.span>

            <LinkItem
              href={repo}
              as={motion.a}
              variants={linksAnimation}
              custom={2}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
            >
              <GitHubIcon /> repo
              <LinkArrowWrapper as={motion.div} variants={linkArrowAnimation}>
                <RightArrowIcon />
              </LinkArrowWrapper>
            </LinkItem>
          </LinksWrapper>
        </DescrWrapper>
      </Wrapper>
    </AnimatePresence>
  );
};
