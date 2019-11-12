import React from "react";
import styled from "styled-components";

import { Container } from "styles/atoms";
import { Form } from "styles/organisms";
import { space, font, color } from "styles/const";

const Background = styled.div`
  width: 100%;
  height: 100vh;
  background: ${color.background};
`;
const Title = styled.h1`
  margin: ${space.sm} auto;
  text-transform: uppercase;
  font-weight: ${font.weight.bold};
  color: ${color.primary};
`;

const Subtitle = styled.h2`
  margin: 0 auto;
  font-weight: ${font.weight.bold};
  color: ${color.primary};
`;

export const Profile = () => (
  <Background>
    <Container>
      <Title>Votre profile</Title>
      <Subtitle>en toute simplicité</Subtitle>
      <Form />
    </Container>
  </Background>
);
