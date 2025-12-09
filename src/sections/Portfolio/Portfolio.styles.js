import styled from "styled-components";
import { Container } from "../Pages.styles";

export const PortfolioContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PortfolioWrapper = styled.div`
  position: relative;
  height: 80vh;
  width: 80%;
  display: flex;
  flex-direction: column;
  margin-bottom: 5rem;
  @media (min-width: 2000px) {
    justify-content: center;
  }
  @media (max-width: 1600px) {
    width: 100%;
  }
  @media (max-width: 768px) {
    width: 90%;
  }
  @media (max-width: 576px) {
    width: 70%;
    height: 500px;
  }
`;
