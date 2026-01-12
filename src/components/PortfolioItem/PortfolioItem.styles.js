import styled from "styled-components";

const flexCenter = `
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  position: relative;
  height: 200px;
  width: 90%;
  padding: 1em;
  color: var(--text-col);
  margin-top: 2em;
  border-radius: 15px;
  background-color: var(--glassBg);
  border: 1px solid var(--glassBorder);
  backdrop-filter: blur(4px);
  overflow: hidden;
  @media (max-width: 1600px) {
    width: 95%;
  }
  @media (max-width: 1400px) {
    width: 100%;
  }
  @media (max-width: 1200px) {
    height: 180px;
    padding: 0.5em;
  }
  @media (max-width: 576px) {
    flex-direction: column;
    height: 360px;
  }
  @media (max-width: 480px) {
    height: 400px;
  }
`;

export const ScreensWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  height: 200px;
  transform-style: preserve-3d;
  z-index: 2;
  @media (max-width: 1200px) {
    height: 180px;
  }
  @media (max-width: 998px) {
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    width: 35%;
  }
  @media (max-width: 768px) {
    justify-content: center;
  }
  @media (max-width: 576px) {
    width: 100%;
    align-items: center;
  }
`;
export const ScreensContainer = styled.div`
  position: relative;
  height: 100%;
  aspect-ratio: 4 / 3;
  @media (max-width: 992px) {
    height: 140px;
  }
  @media (max-width: 768px) {
    height: 100px;
    margin-bottom: 1em;
  }
  @media (max-width: 576px) {
    height: 160px;
    margin-bottom: 0.5em;
  }
`;

export const DesctopScreen = styled.div`
  position: relative;
  height: 100%;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  z-index: 2;
  & img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
`;

export const MobileScreen = styled.div`
  height: 160px;
  aspect-ratio: 9 / 19;
  position: absolute;
  bottom: 0;
  right: -12%;
  overflow: hidden;
  z-index: 3;
  & img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
  @media (max-width: 1200px) {
    height: 150px;
  }
  @media (max-width: 992px) {
    height: 100px;
  }
  @media (max-width: 768px) {
    height: 80px;
  }
  @media (max-width: 576px) {
    height: 140px;
  }
`;

export const DescrWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 70%;
  height: 100%;
  color: var(--text-col);
  padding: 1em;
  z-index: 1;
  @media (max-width: 1400px) {
    width: 65%;
  }
  @media (max-width: 1200px) {
    padding: 0;
  }
  @media (max-width: 992px) {
    width: 60%;
    align-items: flex-end;
    justify-content: center;
  }
  @media (max-width: 576px) {
    width: 90%;
  }
  @media (max-width: 480px) {
    width: 95%;
  }
`;

export const Title = styled.h3`
  font-size: 24px;
  font-weight: 400;
  margin: 0;
  width: 100%;
  @media (max-width: 1200px) {
    font-size: 22px;
  }
  @media (max-width: 992px) {
    font-size: 20px;
  }
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const Tags = styled.div`
  display: flex;
  width: 100%;
  font-size: 14px;
  overflow: visible;
  & div {
    margin-right: 0.5em;
    padding: 0.2em 0.8em;
    border-radius: 10px;
    cursor: pointer;
    display: flex;
    position: relative;
    background: var(--glassBg);
    transition: color 0.3s ease;
    &:hover {
      color: var(--theme-accent);
    }
  }
  @media (max-width: 1200px) {
    font-size: 12px;
  }
  @media (max-width: 992px) {
    font-size: 10px;
    flex-wrap: wrap;
    & div {
      border-radius: 5px;
      margin-right: 0.2em;
      margin-top: 0.2em;
      padding: 0.2em 0.5em;
    }
  }
`;

export const Description = styled.p`
  width: 100%;
  font-size: 16px;
  font-weight: 300;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  line-height: 1.4;
  @media (max-width: 1200px) {
    font-size: 14px;
    margin-top: 0.2em;
    margin-bottom: 0.2em;
  }
  @media (max-width: 992px) {
    font-size: 12px;
    margin-top: 0.5em;
    margin-bottom: 0.5em;
  }
`;

export const LinksWrapper = styled.div`
  ${flexCenter}
  flex-direction: row;
  font-size: 16px;
  & span {
    margin: 0 0.5em;
    color: var(--light-red);
  }
  @media (max-width: 1200px) {
    font-size: 14px;
  }
  @media (max-width: 992px) {
    width: 100%;
    font-size: 12px;
  }
`;

export const LinkArrowWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 2px;
`;

export const LinkItem = styled.a.attrs({
  target: "_blank",
})`
  ${flexCenter}
  position: relative;
  border-radius: 5px;
  background-color: var(--glassBg);
  border: 1px solid var(--glassBorder);
  backdrop-filter: blur(4px);
  position: relative;
  color: var(--text-col);
  font-weight: 400;
  padding: 0.2em 0.8em;
  & svg {
    --size: 18px;
    height: var(--size);
    width: var(--size);
    & path {
      fill: var(--text-col);
    }
  }
  & ${LinkArrowWrapper} svg {
    height: 8px;
    width: 8px;
    fill: var(--theme-accent);
  }
  &:nth-of-type(1) svg {
    margin-left: 0.5em;
  }
  &:nth-of-type(2) svg {
    margin-right: 0.5em;
  }
  &:nth-of-type(1) ${LinkArrowWrapper} {
    left: -5px;
  }
  &:nth-of-type(2) ${LinkArrowWrapper} {
    right: -5px;
  }
  &:hover > svg path {
    fill: var(--theme-accent);
    transition: 0.3s;
  }
  @media (max-width: 1200px) {
    & svg {
      --size: 16px;
      height: var(--size);
      width: var(--size);
    }
  }
  @media (max-width: 992px) {
    & svg {
      --size: 14px;
      height: var(--size);
      width: var(--size);
    }
  }
`;
