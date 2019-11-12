import React from "react";
import styled from "styled-components";
import { Container } from "styles/atoms";
import { color } from "styles/const";

const Background = styled.div`
  width: 100%;
  height: 100vh;
  background: ${color.background};
`;

export const List = () => (
  <Background>
    <Container>
      <div>List</div>
    </Container>
  </Background>
);
