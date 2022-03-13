import React from "react";
import { render } from "@testing-library/react";
import { matchers } from "@emotion/jest";
import Text from "./Text";
import type { TextProps } from "./Text";
import ThemeProvider from "providers/ThemeProvider";
import theme from "theme/DefaultTheme";
import "@testing-library/jest-dom/extend-expect";

expect.extend(matchers);

const TextWrapped = ({ ...props }: TextProps) => (
  <ThemeProvider>
    <Text data-testid="text" {...props} />
  </ThemeProvider>
);

describe("Text render", () => {
  it("should render a default text", () => {
    const { getByTestId } = render(<TextWrapped>Hola como estas</TextWrapped>);
    expect(getByTestId).not.toBeNull();
    const element = getByTestId("text");
    expect(element).not.toBeUndefined();
    expect(element).toHaveTextContent("Hola como estas");
  });

  it("should render a title text", () => {
    const { getByTestId } = render(
      <TextWrapped variant="title">Hola como estas</TextWrapped>
    );
    expect(getByTestId).not.toBeNull();
    const element = getByTestId("text");
    expect(element).not.toBeUndefined();
    expect(element).toHaveStyleRule("color", theme?.lightBlack);
    expect(element).toHaveStyleRule("font-weight", "800");
    expect(element).toHaveStyleRule("letter-spacing", "2px");
    expect(element).toHaveStyleRule("margin", "0");
    expect(element).toHaveStyleRule("font-size", theme.spacing(4));
    expect(element).toHaveTextContent("Hola como estas");
  });

  it("should render a subtitle text", () => {
    const { getByTestId } = render(
      <TextWrapped variant="subtitle">Hola como estas</TextWrapped>
    );
    expect(getByTestId).not.toBeNull();
    const element = getByTestId("text");
    expect(element).not.toBeUndefined();
    expect(element).toHaveStyleRule("color", theme.grey);
    expect(element).toHaveStyleRule("font-weight", "700");
    expect(element).toHaveStyleRule("margin", "0");
    expect(element).toHaveStyleRule("font-size", theme.spacing(3));
    expect(element).toHaveTextContent("Hola como estas");
  });

  it("should render a body text", () => {
    const { getByTestId } = render(
      <TextWrapped variant="body">Hola como estas</TextWrapped>
    );
    expect(getByTestId).not.toBeNull();
    const element = getByTestId("text");
    expect(element).not.toBeUndefined();
    expect(element).toHaveStyleRule("color", theme.grey);
    expect(element).toHaveStyleRule("font-size", theme.spacing(2));
    expect(element).toHaveTextContent("Hola como estas");
  });

  it("should render a label text", () => {
    const { getByTestId } = render(
      <TextWrapped variant="label">Hola como estas</TextWrapped>
    );
    expect(getByTestId).not.toBeNull();
    const element = getByTestId("text");
    expect(element).not.toBeUndefined();
    expect(element).toHaveStyleRule("color", theme.grey);
    expect(element).toHaveStyleRule("font-weight", "600");
    expect(element).toHaveStyleRule("font-size", theme.spacing(1.75));
    expect(element).toHaveTextContent("Hola como estas");
  });
});
