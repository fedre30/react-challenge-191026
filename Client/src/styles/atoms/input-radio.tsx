import React from "react";
import styled from "styled-components";

// import { color, space } from "styles/const";

const InputRadioContainer = styled.div`
  input[type="radio"]:checked ~ div {
    border: 2px solid ${props => props.color};
    &::before {
      background: ${props => props.color};
    }
  }
`;

const InputRadioStyle = styled.div`
  display: block;
  position: absolute;
  border: 1.5px solid ${props => props.color};
  border-radius: 100%;
  height: 23px;
  width: 23px;
  top: 30px;
  left: 20px;
  z-index: 5;
  transition: border 0.25s linear;

  &::before {
    display: block;
    position: absolute;
    content: "";
    border-radius: 100%;
    height: 15px;
    width: 15px;
    top: 2px;
    left: 2px;
    margin: auto;
    transition: background 0.25s linear;
  }
`;

type InputRadioProps = {
  type?: string;
  id?: string;
  color?: string;
  htmlFor?: string;
  onChange: (any) => void;
};

export const InputRadio = ({
  type = "radio",
  onChange,
  color,
  htmlFor
}: InputRadioProps) => (
  <InputRadioContainer color={color}>
    <input type={type} id={htmlFor} name="selector" onChange={onChange} />
    <label htmlFor={htmlFor}></label>
    <InputRadioStyle color={color}>
      <div></div>
    </InputRadioStyle>
  </InputRadioContainer>
);
