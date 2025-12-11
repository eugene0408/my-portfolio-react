import { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";

import { ThemeContext } from "../../../App";

import MoonIcon from "../../../assets/icons/moon.svg?react";
import SunIcon from "../../../assets/icons/sun.svg?react";

import { Wrapper, Item, ThemeIndicator } from "./ThemeSwitch.styles";

export const ThemeSwitch = () => {
  const { theme, changeTheme } = useContext(ThemeContext);

  const switchHandler = () => {
    changeTheme(theme === "dark" ? "light" : "dark");
  };

  const [indicatorPosition, setPosition] = useState(0);

  const changePosition = () => {
    setPosition(theme === "dark" ? 0 : 34);
  };

  useEffect(() => {
    setTimeout(() => changePosition(), 5);
  }, [theme]);

  return (
    <Wrapper theme={theme} as={motion.div} onClick={() => switchHandler()}>
      <ThemeIndicator
        as={motion.div}
        theme={theme}
        animate={{
          x: indicatorPosition,
        }}
        transition={{
          duration: 0.05,
          type: "spring",
        }}
      />

      <Item value="dark" theme={theme} as={motion.div}>
        <MoonIcon title="dark" />
      </Item>
      <Item value="light" theme={theme} as={motion.div}>
        <SunIcon title="light" />
      </Item>
    </Wrapper>
  );
};
