import { breakpoints, spacing } from "utils/StyleUtils";

const theme = {
  breakpoints,
  spacing,
  black: "#000000",
  ligthBlack: "#2e2e2e",
  white: "#FFFFFF",
  grey: "#50514F",
  ligthGrey: "#F2F2F2",
  primary: "#4e34e1",
};

export type Theme = typeof theme;

export default theme;
