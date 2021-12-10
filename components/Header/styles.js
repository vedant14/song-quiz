import styled from "styled-components";
import { colors } from "../../styles/GlobalStyles";

export const HeaderWrapper = styled.header`
  position: fixed;
  background: ${colors.primaryBlack};
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.25);
  top: 0;
  z-index: 999;
  width: 100%;
  > div {
    display: flex;
    height: 120px;
    padding-top: 4px;
    margin-top: auto;
    margin-bottom: auto;
  }
`;

export const LogoWrapper = styled.img`
  height: 80px;
  cursor: pointer;
  margin: auto 0px;
  @media screen and (min-width: 768px) {
    height: 120px;
  }
`;
