import React from "react";
import { render } from "@testing-library/react";
import { matchers } from "@emotion/jest";
import Chip from "./Chip";
import type { ChipProps } from "./Chip";
import theme from "theme/DefaultTheme";
import ThemeProvider from "providers/ThemeProvider";
import "@testing-library/jest-dom/extend-expect";

expect.extend(matchers);

const ChipWrapped = ({ ...props }: ChipProps) => (
  <ThemeProvider>
    <Chip {...props} />
  </ThemeProvider>
);

describe("Chip render", () => {
  it("should render a Chip", () => {
    const { getByTestId } = render(
      <ChipWrapped variant="error">Hola como estas</ChipWrapped>
    );
    expect(getByTestId).not.toBeNull();
    const element = getByTestId("chip");
    expect(element).not.toBeUndefined();
    expect(element).toHaveStyleRule("display", "flex");
    expect(element).toHaveStyleRule(
      "background-color",
      theme.fade(theme.error, 0.1)
    );
    expect(element).toHaveTextContent("Hola como estas");
  });

  it("should render a variant Chip", () => {
    const variant = "error";
    const { getByTestId } = render(
      <ChipWrapped variant={variant}>Hola como estas</ChipWrapped>
    );
    expect(getByTestId).not.toBeNull();
    const element = getByTestId("chip");
    expect(element).not.toBeUndefined();
    expect(element).toHaveStyleRule("display", "flex");
    expect(element).toHaveStyleRule(
      "background-color",
      theme.fade(theme[variant], 0.1)
    );
    expect(element).toHaveTextContent("Hola como estas");
  });
});
