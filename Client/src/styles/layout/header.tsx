import React from "react";
import styled from "styled-components";
import { rem } from "polished";

import heticLogo from "images/heticLogo.svg";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: ${rem(52)};
  padding: ${rem(10)} 0;
  background: #fff;
`;

export const Header = () => (
  <HeaderContainer>
    <img src={heticLogo} alt="" />
  </HeaderContainer>
);
