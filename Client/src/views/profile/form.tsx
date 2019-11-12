import React from "react";
import styled from "styled-components";
import { rem } from "polished";

import { TextField, TextAreaField } from "styles/molecules";
import { space } from "styles/const";
// import LogoGirl from "images/logo-girl.svg";

const FieldWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProfilPicture = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${space.xl};
`;
const ProfilPictureField = styled.input`
  /** 
    * ? TODO Maybe use svg 
    */
  width: ${rem(100)};
  height: ${rem(100)};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: dashed #e3e3e3 4px;
  background: #f4f4f4;
`;

// TODO Review ProfilPictureField

export const Form = () => (
  <>
    <ProfilPicture>
      <div>
        <ProfilPictureField type="file" />
      </div>
      <div>
        <p>Ajouter une photo de profil</p>
        <p>Taille recommandée : 100x100 min</p>
      </div>
    </ProfilPicture>

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
