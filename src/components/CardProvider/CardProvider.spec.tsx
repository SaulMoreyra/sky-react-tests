import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CardProvider from "./CardProvider";
import type { CardProviderProps } from "./CardProvider";
import ThemeProvider from "providers/ThemeProvider";
import theme from "theme/DefaultTheme";
import "@testing-library/jest-dom/extend-expect";
import { matchers } from "@emotion/jest";

expect.extend(matchers);

const CardWrapped = ({ ...props }: CardProviderProps) => (
  <ThemeProvider>
    <CardProvider data-testid="cardprovider-id" {...props} />
  </ThemeProvider>
);

describe("CardProvider render", () => {
  it("should render a CardProvider", () => {
    const onClick = jest.fn();
    const Label = "default";
    const { getByTestId } = render(
      <CardWrapped
        title={"title"}
        subtitle={"subtitle"}
        pricing={"120"}
        days={7}
        selected={false}
        onClick={onClick}
      >
        {Label}
      </CardWrapped>
    );
    const element = getByTestId("cardprovider-id");
    expect(element).toBeValid();
    element.click();
    expect(onClick).toHaveBeenCalled();
  });

  it("should render a selected CardProvider", () => {
    const onClick = jest.fn();
    const Label = "default";
    const wrapper = render(
      <CardWrapped
        title={"title"}
        subtitle={"subtitle"}
        pricing={"120"}
        days={7}
        selected={true}
        onClick={onClick}
      >
        {Label}
      </CardWrapped>
    );
    const cardElement = wrapper.getByTestId("cardprovider-id");
    expect(cardElement).toBeValid();
    expect(cardElement.children.length > 0).toBeTruthy();

    fireEvent.click(cardElement);
    expect(onClick).toHaveBeenCalled();

    expect(cardElement).toHaveStyleRule(
      "background-color",
      theme.fade(theme?.primary, 0.05)
    );
  });
});
