import { useContext, forwardRef } from "react";
import { motion } from "framer-motion";

import { ThemeContext } from "../../App";

import { SkillsIcons } from "../SkillsIcons";

import { Wrapper, IconWrapper, Title } from "./SkillsItem.styles";

const SkillsItem = forwardRef(({ name }, ref) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper theme={theme} ref={ref}>
      <IconWrapper>
        <SkillsIcons name={name} />
      </IconWrapper>

      <Title>{name}</Title>
    </Wrapper>
  );
});

export const MSkillsItem = motion.create(SkillsItem);
