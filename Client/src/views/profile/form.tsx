import React from "react";
import styled from "styled-components";
import { TextField } from "styles/molecules";

const FieldWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Form = () => (
  <FieldWrapper>
    <div>
      <TextField label="Nom" placeholder="exemple : Te" required />
    </div>
    <div>
      <TextField label="Prénom" placeholder="exemple : Marie" required />
    </div>
    <div>
      <TextField
        label="Adresse e-mail"
        placeholder="exemple : exemple@mail.com"
        required
        type="email"
      />
    </div>
  </FieldWrapper>
);
