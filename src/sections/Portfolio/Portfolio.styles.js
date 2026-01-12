import styled from "styled-components";
import { Container } from "../Pages.styles";

export const PortfolioContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 998px) {
    justify-content: center;
    flex-grow: 1;
  }
`;

export const PortfolioWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 550px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5rem;
  @media (min-width: 2000px) {
    justify-content: center;
  }
  @media (max-width: 1600px) {
    width: 100%;
  }
  @media (max-width: 998px) {
    height: 280px;
  }
  @media (max-width: 998px) and (min-height: 800px) {
    height: 480px;
  }
  @media (max-width: 576px) {
    height: 480px;
  }
`;
