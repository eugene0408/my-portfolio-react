import styled from "styled-components";

export const HomeGrid = styled.div`
  display: grid;
  gap: 24px;
  grid-template-columns: 3fr 2fr;

  @media (max-width: 992px) {
    grid-template-columns: 2fr 1fr;
  }

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
`;

export const HeaderTitle = styled.div`
  margin-bottom: 0.5em;
  & h2 {
    position: relative;
    width: fit-content;
    font-family: var(--main-font);
    font-weight: 700;
    font-size: 64px;
    color: var(--text-col);
    line-height: 1.3;
    margin-top: 0;
    margin-bottom: 0;
    z-index: 15;
  }

  @media (max-width: 1200px) {
    & h2 {
      font-size: 48px;
    }
  }
  @media (max-width: 992px) {
    & h2 {
      font-size: 36px;
    }
  }
  @media (max-width: 767px) {
    & h2 {
      font-size: 28px;
    }
  }
  @media (max-width: 767px) {
    margin-top: 15rem;
    & h2::before {
      content: "";
      position: absolute;
      display: inline-block;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      background: var(--glassBg);
      border: 1px solid var(--glassBorder);
      border-bottom: none;
      border-top: none;
      backdrop-filter: blur(4px);
      border-radius: 5px;
      padding: 0 5px 0 0;
      z-index: -1;
    }
  }
`;

export const AvatarWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  & img {
    height: 450px;
    z-index: 2;
  }
  @media (max-width: 1200px) {
    & img {
      height: 340px;
    }
  }
  @media (max-width: 767px) {
    position: absolute;
    top: 0;
    left: 25%;
    height: 92vh;
    & img {
      height: 250px;
    }
  }
`;

export const ThemeImageWrapper = styled.div`
  --size: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: var(--size);
  width: var(--size);
  position: absolute;
  top: 15%;
  left: 45%;
  z-index: 2;
  cursor: pointer;
  & img {
    height: 100%;
    width: 100%;
  }
  @media (max-width: 768px) {
    --size: 70px;
    left: 30%;
  }
`;

export const ScrollDownWrapper = styled.div`
  position: absolute;
  width: 100%;
  bottom: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    bottom: 2rem;
  }
`;

export const ScrollLink = styled.a`
  --size: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  height: var(--size);
  width: var(--size);
  &:hover {
    & div {
      border-left: 2px solid var(--theme-accent);
      border-bottom: 2px solid var(--theme-accent);
    }
  }
`;

export const DownArrow = styled.div`
  height: 100%;
  width: 100%;
  border-left: 1px solid var(--text-col);
  border-bottom: 1px solid var(--text-col);
`;
