import React from "react";
import { render } from "@testing-library/react";
import Button from "./Button";
import type { ButtonProps } from "./Button";
import ThemeProvider from "providers/ThemeProvider";

const ButtonWrapped = ({ ...props }: ButtonProps) => (
  <ThemeProvider>
    <Button {...props} />
  </ThemeProvider>
);

describe("Button render", () => {
  it("should render a default button", () => {
    const onClick = jest.fn();
    const Label = "default";
    const { getByText } = render(
      <ButtonWrapped onClick={onClick}>{Label}</ButtonWrapped>
    );
    const element = getByText(Label);
    expect(element).toBeValid();
    element.click();
    expect(onClick).toHaveBeenCalled();
  });

  it("should render a primary button", () => {
    const onClick = jest.fn();
    const Label = "primary";
    const { getByText } = render(
      <ButtonWrapped type="primary" onClick={onClick}>
        {Label}
      </ButtonWrapped>
    );
    const element = getByText(Label);
    expect(element).toBeValid();
    element.click();
    expect(onClick).toHaveBeenCalled();
  });

  it("should render a secondary button", () => {
    const onClick = jest.fn();
    const Label = "secondary";
    const { getByText } = render(
      <ButtonWrapped type="secondary" onClick={onClick}>
        {Label}
      </ButtonWrapped>
    );
    const element = getByText(Label);
    expect(element).toBeValid();
    element.click();
    expect(onClick).toHaveBeenCalled();
  });
});
