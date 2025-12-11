import React from "react";
import { SkillsIcons } from "../SkillsIcons";

import { Wrapper, Item } from "./PortfolioCategorySelect.styles";

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
      {categoriesList.map((category) => (
        <Item
          key={`pc-${category}`}
          value={category}
          onClick={(e) => changeCategory(e)}
          $curCategory={curCategory}
        >
          <SkillsIcons name={category} />
          {category}
        </Item>
      ))}
    </Wrapper>
  );
};
