import React from "react";

import { Wrapper, Item } from "./PortfolioPagination.styles";

export const PortfolioPagination = ({
  curScreen,
  setCurScreen,
  totalScreens,
}) => {
  return (
    <Wrapper>
      {totalScreens.map((number) => (
        <Item
          key={`pagination${number}`}
          onClick={() => setCurScreen(number)}
          $isActive={number === curScreen}
        />
      ))}
    </Wrapper>
  );
};
