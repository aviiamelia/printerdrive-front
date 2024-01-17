import React from "react";
import { Container } from "./styles";

export const MainContainer = ({ children }: { children: React.ReactNode }) => {
  return <Container>{children}</Container>;
};
