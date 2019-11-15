import React from "react";
import styled from "styled-components";
import { switchProp } from "styled-tools";

const ButtonWrapperStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  justify-content: ${switchProp("align", {
    left: "flex-start;",
    center: "center;",
    right: "flex-end;"
  })};
`;

type ButtonWrapperProps = {
  children?: React.ReactNode;
  align?: "left" | "center" | "right";
  style?: React.CSSProperties;
};

export const ButtonWrapper = ({
  children,
  align,
  style
}: ButtonWrapperProps) => (
  <ButtonWrapperStyle style={style} align={align}>
    {children}
  </ButtonWrapperStyle>
);
