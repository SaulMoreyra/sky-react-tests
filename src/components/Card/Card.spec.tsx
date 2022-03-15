import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Card from "./Card";
import type { CardProps } from "./Card";
import ThemeProvider from "providers/ThemeProvider";
import theme from "theme/DefaultTheme";
import "@testing-library/jest-dom/extend-expect";
import { matchers } from "@emotion/jest";

expect.extend(matchers);

const CardWrapped = ({ ...props }: CardProps) => (
  <ThemeProvider>
    <Card data-testid="card-id" {...props} />
  </ThemeProvider>
);

describe("Card render", () => {
  it("should render a Card", () => {
    const onClick = jest.fn();
    const Label = "default";
    const { getByText } = render(
      <CardWrapped onClick={onClick} title={"Title"} subtitle={"Subtitle"}>
        {Label}
      </CardWrapped>
    );
    const element = getByText(Label);
    expect(element).toBeValid();
    element.click();
    expect(onClick).toHaveBeenCalled();
  });

  it("should render a selected Card", () => {
    const onClick = jest.fn();
    const Label = "default";
    const wrapper = render(
      <CardWrapped
        selected={true}
        onClick={onClick}
        title={"Title"}
        subtitle={"Subtitle"}
      >
        {Label}
      </CardWrapped>
    );
    const cardElement = wrapper.getByTestId("card-id");
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
