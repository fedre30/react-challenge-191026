import React from "react";
import styled from "styled-components";

import { space } from "styles/const";

const ContainerStyle = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: ${space.md} ${space.lg};
`;

export const Container = ({ children }: React.PropsWithChildren<{}>) => (
  <ContainerStyle>{children}</ContainerStyle>
);
