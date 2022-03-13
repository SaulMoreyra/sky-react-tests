import { breakpoints, spacing, fade, getColor } from "utils/StyleUtils";

const theme = {
  breakpoints,
  spacing,
  fade,
  getColor,
  black: "#000000",
  lightBlack: "#2e2e2e",
  white: "#FFFFFF",
  grey: "#50514F",
  lightGrey: "#F2F2F2",
  primaryLight: "#7E6BEC",
  primary: "#4e34e1",
  primaryDark: "#3C1FE0",
  error: "#f44336",
  success: "#28a745",
  warning: "#ff8c00",
  info: "#0096FF",
};

export type Theme = typeof theme;

export default theme;
