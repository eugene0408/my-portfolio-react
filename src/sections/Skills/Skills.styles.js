import styled from "styled-components";
import { Container, PageHeader } from "../Pages.styles";

export const SkillsContainer = styled(Container)`
  width: 100%;
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  width: 100%;
  height: max-content;
  @media (max-width: 480px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`;

export const CardsContainer = styled.div`
  position: relative;
  width: 50%;
  display: flex;
  flex-wrap: wrap;
  gap: 0 16px;
  @media (max-width: 992px) {
    widht: 40%;
  }
  @media (max-width: 480px) {
    width: 100%;
    gap: 0 8px;
    & .cards-header {
      margin-top: 0.3em;
    }
  }
`;

export const CardsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: max-content;
  gap: 16px;
  margin-bottom: 16px;
  padding: 0 1em;
  border-radius: 10px;
  background-color: var(--glassBg);
  border: 1px solid var(--glassBorder);
  backdrop-filter: blur(4px);
  @media (max-width: 1600px) {
    gap: 14px;
  }
  @media (max-width: 480px) {
    gap: 8px;
    margin-bottom: 8px;
    padding: 0 0.3em;
  }
`;

export const TextWrapper = styled.div`
  position: relative;
  width: 50%;
  padding: 0 4em 1em 1em;
  color: var(--text-col);
  font-size: 18px;
  @media (max-width: 992px) {
    font-size: 16px;
    width: 60%;
    padding: 0 2em 1em 1em;
  }
  @media (max-width: 480px) {
    padding: 0;
    width: 100%;
    font-size: 14px;
    & p {
      margin: 0.5em 0;
    }
  }
`;
export const Header = styled(PageHeader)`
  position: relative;
  @media (max-width: 480px) {
    font-size: 28px;
  }
`;

export const H = styled.span`
  color: var(--theme-accent);
`;

export const RowHeader = styled.h4`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  font-size: 96px;
  font-weight: 800;
  color: var(--text-col);
  opacity: 0.05;
  margin: 0;
  width: 100%;
  text-align: left;
  cursor: default;
  transition: 0.4s ease;
  @media (hover: hover) {
    ${CardsContainer}:hover & {
      opacity: 0.1;
    }
  }
  @media (max-width: 479px) {
    font-size: 82px;
  }
  @media (max-width: 992px) {
    font-size: 82px;
  }
`;
