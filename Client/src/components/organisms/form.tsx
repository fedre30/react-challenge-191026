import React from "react";
import { Input } from "components/atoms";
import styled from "styled-components";
import { space } from "styles/const";

const BasicInformations = styled.div`
  display: flex;
  width: 70%;
  justify-content: space-between;
  margin: ${space.md} auto;
`;

export const Form = () => (
  <BasicInformations>
    {" "}
    <Input label="Nom" placeholder="exemple : Te" required />
    <Input label="Prénom" placeholder="exemple : Marie" required />
    <Input
      label="Adresse e-mail"
      placeholder="exemple : exemple@mail.com"
      required
      type="email"
    />
  </BasicInformations>
);
