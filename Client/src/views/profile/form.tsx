import React from "react";
import styled from "styled-components";
import { rem } from "polished";

import { TextField, TextAreaField } from "styles/molecules";
import { ButtonWrapper } from "styles/atoms";
import { space, color } from "styles/const";
// import LogoGirl from "images/logo-girl.svg";

import { MarkSelector } from "./mark-selector";

const FieldWrapper = styled.div`
  display: flex;
  justify-content: ${props => (props.align ? "center" : "space-between")};
  &:not(:last-child) {
    margin-bottom: ${rem(24)};
  }
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
  cursor: pointer;
`;

const Button = styled.button`
  appearance: none;
  text-decoration: none;
  background-color: transparent;
  border: none;
  cursor: pointer;
  &:focus {
    outline: none;
  }

  padding: ${rem(12)} ${rem(75)};
  background: ${color.error};
  color: #fff;
  cursor: pointer;
  transition: 0.25s ease-in-out;
  &:hover {
    background: #fff;
    border: 1px solid ${color.error};
    color: ${color.error};
    transition: 0.25s ease-in-out;
  }
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
    <MarkSelector />
    <FieldWrapper align="center">
      <div style={{ marginRight: rem(20) }}>
        <TextField
          label="Mot de passe"
          placeholder="exemple : Te"
          required
          onChange={() => {}}
        />
      </div>
      <div>
        <TextField
          label="Promotion"
          placeholder="exemple : WEB PXXXX"
          required
          onChange={() => {}}
        />
      </div>
    </FieldWrapper>
    <ButtonWrapper align="center">
      <Button>Valider</Button>
    </ButtonWrapper>
  </>
);
