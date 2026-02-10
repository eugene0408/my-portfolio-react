import { forwardRef } from "react";
import { motion } from "framer-motion";

import { MSkillsItem } from "../../components";

import { PageWrapper, PageHeader, Container } from "../Pages.styles";
import {
  RowHeader,
  CardsContainer,
  ContentWrapper,
  SkillsContainer,
  CardsWrapper,
  TextWrapper,
  Header,
  H,
} from "./Skills.styles";
import {
  skillCardsAnimation,
  cardsWrapperAnimation,
  textAnimation,
} from "./Skills.animations";

export const Skills = forwardRef(({ skillsData }, ref) => {
  return (
    <PageWrapper id="s-skills" ref={ref}>
      <SkillsContainer>
        <ContentWrapper>
          <TextWrapper>
            <Header> About Me </Header>
            <motion.p
              variants={textAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 1 }}
              custom={1}
            >
              Frontend developer specializing in <H>React</H> and modern{" "}
              <H>JavaScript</H>. I build <H>responsive web applications</H>{" "}
              using Redux Toolkit, REST APIs, and modular component
              architectures.
            </motion.p>
            <motion.p
              variants={textAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 1 }}
              custom={3}
            >
              Through personal projects, I implement features commonly used in
              real-world products, such as product catalogs, search and
              filtering, state management, theming, and responsive layouts. I
              enjoy solving <H>practical problems</H> and continuously improving
              my skills by building and refining complete applications.
            </motion.p>
          </TextWrapper>
          <CardsContainer>
            <Header className="cards-header">My Skills</Header>
            {Object.entries(skillsData).map(
              ([category, items], categoryIndex) => (
                <CardsWrapper
                  as={motion.div}
                  key={category}
                  variants={cardsWrapperAnimation}
                  initial="hidden"
                  whileInView="visible"
                  custom={categoryIndex}
                >
                  {items.map((item, index) => (
                    <MSkillsItem
                      key={item}
                      name={item}
                      variants={skillCardsAnimation}
                      initial="hidden"
                      whileInView="visible"
                      whileHover="hover"
                      custom={index * categoryIndex}
                    />
                  ))}
                </CardsWrapper>
              ),
            )}
          </CardsContainer>
        </ContentWrapper>
      </SkillsContainer>
    </PageWrapper>
  );
});
