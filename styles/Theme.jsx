import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    white: "#FFF",
    bittersweet: "#5839f6"
  },
  zIndex: {
    "z-index-1": 1,
    "z-index-10": 10,
    "z-index-100": 100,
    "z-index-1000": 1000,
    "z-index-10000": 10000,

  },
  fonts: [],
  fontSizes: {
  }
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;