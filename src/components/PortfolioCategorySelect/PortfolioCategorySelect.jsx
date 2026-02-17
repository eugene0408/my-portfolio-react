import { motion } from "framer-motion";

import { SkillsIcons } from "../SkillsIcons";

import { Wrapper, Item } from "./PortfolioCategorySelect.styles";

import { bounceIn } from "../../animations";

export const PortfolioCategorySelect = ({
  curCategory,
  setCategory,
  categoriesList,
  setPage,
}) => {
  const changeCategory = (e) => {
    setCategory(e.currentTarget.value);
    setPage(1); //reset pagination
  };

  return (
    <Wrapper>
      {categoriesList.map((category, index) => (
        <Item
          as={motion.button}
          key={`pc-${category}`}
          value={category}
          onClick={(e) => changeCategory(e)}
          $curCategory={curCategory}
          variants={bounceIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }}
          custom={{ delayIndex: index + 1, startScale: 0.9 }}
        >
          <SkillsIcons name={category} />
          {category}
        </Item>
      ))}
    </Wrapper>
  );
};
