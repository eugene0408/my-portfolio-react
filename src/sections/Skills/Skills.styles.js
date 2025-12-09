import styled from "styled-components";
import { Container } from "../Pages.styles";

export const SkillsContainer = styled(Container)`
  width: 100%;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const CardsGrid = styled.div`
  position: relative;
  width: 100%;
  display: grid;
  gap: 10px 0;
  grid-template-columns: repeat(4, 1fr);
  margin-top: 3em;
  @media (min-width: 576px) {
    grid-template-columns: repeat(5, 1fr);
    gap: 16px 0;
    margin-top: 1em;
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(7, 1fr);
    margin-top: 1.5em;
  }
  @media (min-width: 1200px) {
    grid-template-columns: repeat(8, 1fr);
  }
  @media (min-width: 1400px) {
    grid-template-columns: repeat(12, 1fr);
  }
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
    ${CardsGrid}:hover & {
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
