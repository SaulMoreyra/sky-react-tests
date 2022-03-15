import React from "react";
import { render } from "@testing-library/react";
import { matchers } from "@emotion/jest";
import Header from "./Header";
import theme from "theme/DefaultTheme";
import ThemeProvider from "providers/ThemeProvider";
import "@testing-library/jest-dom/extend-expect";

expect.extend(matchers);

const HeaderWrapped = () => (
  <ThemeProvider>
    <Header data-testid="header-id" />
  </ThemeProvider>
);

describe("Header render", () => {
  it("should render a Header", () => {
    const { getByTestId } = render(<HeaderWrapped />);
    expect(getByTestId).not.toBeNull();
    const element = getByTestId("header-id");
    expect(element).not.toBeUndefined();
    expect(element).toHaveStyleRule("position", "fixed");
  });
});
