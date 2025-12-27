import { forwardRef } from "react";

import { MSkillsItem } from "../../components";

import { PageWrapper, PageHeader, Container } from "../Pages.styles";
import { RowHeader, CardsGrid, SkillsContainer } from "./Skills.styles";
import { skillCardsAnimation } from "./Skills.animations";

export const Skills = forwardRef(({ skillsData }, ref) => {
  return (
    <PageWrapper id="s-skills" ref={ref}>
      <PageHeader> My skills </PageHeader>
      <SkillsContainer>
        <CardsGrid>
          <RowHeader>Development</RowHeader>
          {skillsData.development.map((item, index) => (
            <MSkillsItem
              key={item}
              name={item}
              variants={skillCardsAnimation}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              custom={index + 0.3}
            />
          ))}
        </CardsGrid>

        <CardsGrid>
          <RowHeader>Tools</RowHeader>
          {skillsData.tools.map((item, index) => (
            <MSkillsItem
              key={item}
              name={item}
              variants={skillCardsAnimation}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              custom={index + 0.6}
            />
          ))}
        </CardsGrid>

        <CardsGrid>
          <RowHeader>Graphics</RowHeader>
          {skillsData.graphic.map((item, index) => (
            <MSkillsItem
              key={item}
              name={item}
              variants={skillCardsAnimation}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              custom={index + 0.9}
            />
          ))}
        </CardsGrid>
      </SkillsContainer>
    </PageWrapper>
  );
});
