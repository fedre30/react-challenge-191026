import React from "react";
import styled from "styled-components";

import { color, font } from "styles/const";

const LabelStyle = styled.label`
  color: ${color.primary};
  font-weight: ${font.weight.bold};
`;

type LabelProps = {
  children: any;
  htmlFor?: string;
};

export const Label = ({ children, htmlFor }: LabelProps) => (
  <LabelStyle htmlFor={htmlFor}>{children}</LabelStyle>
);
