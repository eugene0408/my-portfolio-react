import styled from "styled-components";

const flexCenter = `
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Wrapper = styled.div`
  ${flexCenter}
  flex-direction: column;
  position: relative;
  cursor: default;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 10%;
    height: 100%;
    width: 80%;
    border-radius: 10px;
    background-color: var(--glassBg);
    border: 1px solid var(--glassBorder);
    backdrop-filter: blur(4px);
    z-index: 1;
  }
  @media (max-width: 480px) {
    margin-top: 1rem;
    &::before {
      top: -10%;
      height: 120%;
    }
  }
`;

export const IconWrapper = styled.div`
  ${flexCenter}
  --icon-size: 48px;
  width: 100%;
  z-index: 2;
  margin-top: 1em;
  & svg {
    height: var(--icon-size);
    & path {
      fill: var(--text-col);
    }
  }
  @media (max-width: 992px) {
    --icon-size: 32px;
  }
  @media (max-width: 576px) {
    --icon-size: 25px;
    margin-top: 0.5em;
  }
  @media (hover: hover) {
    ${Wrapper}:hover & svg {
      transform: scale(1.2);
      transition: all 0.3s ease-in-out;
    }
    ${Wrapper}:hover & svg path {
      fill: var(--theme-accent);
      transition: all 0.3s ease-in-out;
    }
  }
`;
export const Title = styled.h3`
  text-transform: uppercase;
  color: var(--text-col);
  font-size: 16px;
  font-weight: 500;
  z-index: 2;
  @media (max-width: 992px) {
    font-size: 14px;
    margin: 0.7em 0;
  }
  @media (max-width: 480px) {
    font-size: 10px;
    margin: 0.5em 0;
  }
`;
