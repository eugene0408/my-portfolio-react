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
  @media (max-width: 480px) {
    margin-top: 1rem;
  }
`;

export const IconWrapper = styled.div`
  ${flexCenter}
  --icon-size: 36px;
  width: 100%;
  z-index: 2;
  margin-top: 1em;
  & svg {
    height: var(--icon-size);
    & path {
      fill: var(--text-col);
    }
  }
  @media (max-width: 1600px) {
    --icon-size: 32px;
    margin-top: 0.8em;
  }
  @media (max-width: 576px) {
    --icon-size: 25px;
    min-width: 50px;
    margin-top: 0;
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
export const Title = styled.h4`
  text-transform: uppercase;
  color: var(--text-col);
  font-size: 14px;
  font-weight: 500;
  margin: 0.7em 0;
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
