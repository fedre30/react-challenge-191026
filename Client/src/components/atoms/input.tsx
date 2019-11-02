import React from "react";
import styled from "styled-components";
import { color, font, space } from "styles/const";

type InputProps = {
  type?: string;
  id?: string;
  placeholder?: string;
  onChange?: () => void;
  label?: string;
  required?: boolean;
};

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 305px;
`;

const InputStyle = styled.input`
  width: inherit;
  height: 51px;
  border: 1px solid #f0f0f0;
  color: ${color.grey};
  font-weight: ${font.weight.italic};
  padding: 0 ${space.sm};
`;

const LabelContainer = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: ${space.sm};
`;

const LabelStyle = styled.label`
  color: ${color.primary};
  font-weight: ${font.weight.bold};
`;

const RequiredStyle = styled.div`
  color: #f24646;
  margin-left: ${space.xs};
`;

export const Input = ({
  type = "text",
  id,
  placeholder,
  onChange,
  label,
  required = false
}: InputProps) => (
  <InputContainer>
    <LabelContainer>
      {label && <LabelStyle htmlFor={id}>{label}</LabelStyle>}
      {required && <RequiredStyle>*</RequiredStyle>}
    </LabelContainer>
    <InputStyle
      type={type}
      id={id}
      placeholder={placeholder}
      onChange={onChange}
    />
  </InputContainer>
);
