import React from "react";
import styled from "styled-components";
import { rem } from "polished";

import { color, font, space } from "styles/const";

type InputProps = {
  type?: string;
  id?: string;
  placeholder?: string;
  onChange?: (any) => void;
  label?: string;
  required?: boolean;
};

const InputStyle = styled.input`
  width: inherit;
  height: ${rem(51)};
  border: 1px solid #f0f0f0;
  color: ${color.grey};
  font-weight: ${font.weight.italic};
  padding: 0 ${space.sm};
`;

export const InputText = ({
  type = "text",
  id,
  placeholder,
  onChange
}: InputProps) => (
  <>
    <InputStyle
      type={type}
      id={id}
      placeholder={placeholder}
      onChange={onChange}
    />
  </>
);
