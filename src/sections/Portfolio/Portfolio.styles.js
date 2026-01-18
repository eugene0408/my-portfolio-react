import styled from "styled-components";
import { Container } from "../Pages.styles";

// Container for categories select and slyder
export const PortfolioContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding-top: 0;
  @media (max-width: 1400px) {
    padding-top: 4rem;
  }
  @media (max-width: 998px) {
    justify-content: center;
    flex-grow: 1;
  }
`;
// Wrapper for slydes
export const PortfolioWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 480px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /*justify-content: center;*/
  margin-top: 1rem;
  margin-bottom: 1rem;
  @media (max-width: 1600px) {
    width: 100%;
  }
  @media (max-width: 1400px) {
    margin-top: 0.5rem;
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
