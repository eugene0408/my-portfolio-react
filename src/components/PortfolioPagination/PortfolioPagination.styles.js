import styled from "styled-components";

const size = 10;

export const Wrapper = styled.div`
  position: absolute;
  bottom: -50px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
`;

export const Item = styled.div`
  height: ${size}px;
  width: ${size}px;
  border-radius: 50%;
  cursor: pointer;
  margin: 0 0.3em;
  transition: 0.3s ease;
  background: ${(props) =>
    props.$isActive ? "var(--accent)" : "var(--text-col)"};
  opacity: ${(props) => (props.$isActive ? "1" : "0.3")};
  ${(props) => (props.$isActive ? "transform: scale(1.4)" : "")};
`;
