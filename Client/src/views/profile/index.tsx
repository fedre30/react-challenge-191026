import React from "react";
import styled from "styled-components";
import { rem } from "polished";

import { Container } from "styles/layout/container";
import { space, font, color } from "styles/const";

import { Form } from "./form";

const Title = styled.h1`
  margin: ${space.sm} auto;
  text-transform: uppercase;
  font-size: ${rem(48)};
  font-weight: ${font.weight.bold};
  color: ${color.primary};
  text-align: center;
`;

const Subtitle = styled.h2`
  margin-bottom: ${space.xl};
  font-size: ${rem(24)};
  color: ${color.primary};
  text-align: center;
`;

export const Profile = () => (
  <Container>
    <Title>Votre profile</Title>
    <Subtitle>en toute simplicité</Subtitle>
    <Form />
  </Container>
);
