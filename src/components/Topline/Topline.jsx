import LinkedIcon from "../../assets/icons/linkedin.svg?react";
import GitHubIcon from "../../assets/icons/github.svg?react";

import { ThemeSwitch } from "./ThemeSwitch/ThemeSwitch";

import {
  ToplineContainer,
  ToplineLink,
  LinksWrapper,
  ToplineWrapper,
} from "./Topline.styles";

export const Topline = () => {
  return (
    <ToplineWrapper>
      <ToplineContainer>
        <ThemeSwitch />

        <LinksWrapper>
          <ToplineLink href="https://linkedin.com">
            <LinkedIcon />
          </ToplineLink>
          <ToplineLink href="https://github.com/eugene0408">
            <GitHubIcon />
          </ToplineLink>
        </LinksWrapper>
      </ToplineContainer>
    </ToplineWrapper>
  );
};
