import React from "react";
import styled from "styled-components";
import { rem } from "polished";

import { color, space } from "styles/const";

const InputStyle = styled.input`
  width: ${rem(305)};
  height: ${rem(50)};
  border: 1px solid #f0f0f0;
  color: ${color.grey};
  padding: 0 ${space.sm};
`;

type InputProps = {
  type?: string;
  id?: string;
  placeholder?: string;
  onChange: (any) => void;
  required?: boolean;
};

export const InputText = ({
  type = "text",
  id,
  placeholder,
  onChange,
  required
}: InputProps) => (
  <>
    <InputStyle
      type={type}
      id={id}
      placeholder={placeholder}
      onChange={onChange}
      required={required}
    />
  </>
);
