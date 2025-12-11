import React, { useContext } from "react";
import { SectionContext } from "../../App";

import HomeIcon from "../../assets/icons/menu/home.svg?react";
import CodeIcon from "../../assets/icons/menu/code.svg?react";
import GalleryIcon from "../../assets/icons/menu/gallery.svg?react";
import ContactsIcon from "../../assets/icons/menu/chat.svg?react";
import UpArrow from "../../assets/icons/up-arrow.svg?react";
import DownArrow from "../../assets/icons/down-arrow.svg?react";

import {
  Menu,
  MenuLink,
  MenuWrapper,
  ArrowLinkPrev,
  ArrowLinkNext,
} from "./SideMenu.styles";

export const SideMenu = ({ scrollToSection, setPortfolioHovered }) => {
  const { active } = useContext(SectionContext);

  const switchToSection = (section) => {
    setPortfolioHovered(false);
    setTimeout(scrollToSection(section), 100);
    console.log(section);
  };

  // Sections list
  const sections = ["s-home", "s-skills", "s-portfolio", "s-contacts"];

  const furtherSection = () => {
    const currentIndex = sections.indexOf(active);
    return {
      next: sections[currentIndex + 1],
      prev: sections[currentIndex - 1],
    };
  };

  const nextSection = furtherSection().next;
  const prevSection = furtherSection().prev;

  const sectionNameFromId = (string) => {
    if (string) {
      string = string.substring(2);
      string = string.toUpperCase();
      return string;
    }
  };

  return (
    <MenuWrapper>
      <ArrowLinkPrev
        $prevsection={prevSection}
        $active={active}
        onClick={() => switchToSection(prevSection)}
      >
        <UpArrow />
        {sectionNameFromId(prevSection)}
      </ArrowLinkPrev>

      <Menu>
        <MenuLink
          to="s-home"
          $active={active}
          onClick={() => switchToSection("s-home")}
        >
          <HomeIcon />
        </MenuLink>

        <MenuLink
          to="s-skills"
          $active={active}
          onClick={() => switchToSection("s-skills")}
        >
          <CodeIcon />
        </MenuLink>

        <MenuLink
          to="s-portfolio"
          $active={active}
          onClick={() => switchToSection("s-portfolio")}
        >
          <GalleryIcon />
        </MenuLink>

        <MenuLink
          to="s-contacts"
          $active={active}
          onClick={() => switchToSection("s-contacts")}
        >
          <ContactsIcon />
        </MenuLink>
      </Menu>

      <ArrowLinkNext
        $nextsection={nextSection}
        $active={active}
        onClick={() => switchToSection(nextSection)}
      >
        {sectionNameFromId(nextSection)}
        <DownArrow />
      </ArrowLinkNext>
    </MenuWrapper>
  );
};
