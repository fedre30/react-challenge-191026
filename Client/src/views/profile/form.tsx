import React from "react";
import styled from "styled-components";
import { TextField, TextAreaField } from "styles/molecules";

const FieldWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Form = () => (
  <>
    <FieldWrapper>
      <div>
        <TextField
          label="Nom"
          placeholder="exemple : Te"
          required
          onChange={() => {}}
        />
      </div>
      <div>
        <TextField
          label="Prénom"
          placeholder="exemple : Marie"
          required
          onChange={() => {}}
        />
      </div>
      <div>
        <TextField
          label="Adresse e-mail"
          placeholder="exemple : exemple@mail.com"
          required
          type="email"
          onChange={() => {}}
        />
      </div>
    </FieldWrapper>
    <FieldWrapper>
      <div style={{ width: "100%" }}>
        <TextAreaField
          label="Votre cursus"
          placeholder="Décrivez votre cursus en quelques lignes..."
          onChange={() => {}}
        />
      </div>
    </FieldWrapper>
  </>
);
