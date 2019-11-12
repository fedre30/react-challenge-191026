import React from "react";
import styled from "styled-components";
import { rem } from "polished";

import { color } from "styles/const";

const LabelStyle = styled.label`
  color: ${color.primary};
  margin-bottom: ${rem(10)};
  display: block;
`;

type LabelProps = {
  children: any;
  htmlFor?: string;
};

export const Label = ({ children, htmlFor }: LabelProps) => (
  <LabelStyle htmlFor={htmlFor}>{children}</LabelStyle>
);
