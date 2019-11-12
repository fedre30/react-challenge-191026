import React from "react";
import styled from "styled-components";

import { space } from "styles/const";

const ContainerStyle = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${space.base};
  width: 100%;
`;

export const Container = ({ children }: React.PropsWithChildren<{}>) => (
  <ContainerStyle>{children}</ContainerStyle>
);
