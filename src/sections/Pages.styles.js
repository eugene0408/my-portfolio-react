import styled from "styled-components";

export const PageWrapper = styled.section`
  position: relative;
  margin: 0;
  min-height: 100vh;
  min-width: 100vw;
  /* display: inline-block; */
  display: flex;
  flex-direction: column;
  z-index: 2;
  scroll-snap-align: start;
  overflow: hidden; //fix snapscroll glitching
`;
export const PageHeader = styled.h2`
  font-size: 36px;
  font-weight: 600;
  margin-top: 4rem;
  color: var(--text-col);
  width: 100%;
  text-align: center;
  opacity: 0.3;
  @media (max-width: 1600px) {
    margin-top: 2rem;
  }
  @media (max-width: 992px) {
    margin-top: 3rem;
  }
  @media (max-width: 768px) {
    margin-top: 4rem;
  }
  @media (max-width: 480px) {
    margin-bottom: 0.3em;
  }
`;

export const SnapScrollContainer = styled.div`
  display: flex;
  flex-direction: column;
  scroll-snap-type: y mandatory;
  height: 100vh;
  max-height: 100vh;
  overflow-x: hidden;
  overflow-y: ${(props) =>
    props.$portfolioHovered && props.$currentSection === "s-portfolio"
      ? "hidden"
      : "scroll"};
  scrollbar-width: none;
  scroll-behavior: smooth;
  scroll-padding: 0;
  &::-webkit-scrollbar {
    display: none;
    width: 0;
    height: 0;
  }
`;

export const Container = styled.div`
  width: 100%;
  margin-inline: auto;
  padding-inline: 16px;
  position: relative;

  @media (min-width: 320px) and (max-width: 479px) {
    max-width: 280px;
    padding-inline: 0;
    margin-inline-start: auto;
    margin-inline-end: 2em;
  }

  @media (min-width: 480px) {
    max-width: 360px;
  }

  @media (min-width: 576px) {
    max-width: 400px;
  }

  @media (min-width: 768px) {
    max-width: 580px;
  }

  @media (min-width: 992px) {
    max-width: 800px;
  }

  @media (min-width: 1200px) {
    max-width: 980px;
  }

  @media (min-width: 1400px) {
    max-width: 1180px;
  }

  @media (min-width: 1600px) {
    max-width: 1280px;
  }
`;

export const Grid = styled.div`
  display: grid;
  gap: ${({ $gap }) => $gap || "24px"};
  grid-template-columns: ${({ $columns }) => $columns || "1fr 1fr"};
`;
