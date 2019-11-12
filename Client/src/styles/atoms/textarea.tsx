import React from "react";
import styled from "styled-components";
import { rem } from "polished";

import { space } from "styles/const";

const TextAreaStyle = styled.textarea`
  width: 100%;
  padding: ${space.xs};
  overflow: auto;
  outline: none;
  box-shadow: none;
  resize: none;
  min-height: ${rem(128)};

  &:focus {
    outline: none;
  }
`;

type TextAreaProps = {
  onChange: (e: any) => any;
  placeholder: string;
  id?: string;
};

export const TextArea = ({ onChange, placeholder, id }: TextAreaProps) => (
  <TextAreaStyle id={id} onChange={onChange} placeholder={placeholder} />
);
