import { Theme } from "@emotion/react";
import { ColorVariant } from "interfaces/Color";

const BASE_SPACING = 8;
export const spacing = (...spaces: number[]) =>
  spaces
    .slice(0, 4)
    .map((space) => `${space * BASE_SPACING}px`)
    .join(" ");

export const fade = (hex: string, alpha = 1) => {
  if (!/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) throw new Error("Bad Hex Color");
  const r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16);

  return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
};

export const getColor = (theme: Theme, variant: ColorVariant): string => {
  const { success, error, warning, info } = theme;
  const COLORS = { success, error, warning, info };
  return COLORS[variant] || COLORS.info;
};

export const breakpoints = {
  in: "1px",
  sm: "576px",
  md: "820px",
  lg: "1024px",
  xl: "1280px",
  xxl: "1920px",
};

export default {
  breakpoints,
  spacing,
  fade,
};
