import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: var(--main-bg);
  color: var(--text-col);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  & svg {
    height: 50px;
    width: 50px;
  }
  & svg path {
    fill: var(--text-col);
  }
`;
