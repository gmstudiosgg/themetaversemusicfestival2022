import React from "react";
import theme from "../../../utils/theme";
import { ThemeProvider } from "styled-components";
import "../../css/stylesheet.css";
import { StyledLayout } from "./styles";

// markup
const Layout = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <StyledLayout id="layout-root">{props.children}</StyledLayout>
    </ThemeProvider>
  );
};

export default Layout;
