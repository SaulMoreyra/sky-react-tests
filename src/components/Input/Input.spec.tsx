import React, { useState } from "react";
import { fireEvent, render } from "@testing-library/react";
import { matchers } from "@emotion/jest";
import Input from "./Input";
import type { InputProps } from "./Input";
import ThemeProvider from "providers/ThemeProvider";
import "@testing-library/jest-dom/extend-expect";

expect.extend(matchers);

const InputWrapped = ({ ...props }: InputProps) => (
  <ThemeProvider>
    <Input data-testid="test-input" {...props} />
  </ThemeProvider>
);

function InputRendered() {
  const [value, setValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return <InputWrapped value={value} onChange={handleChange} />;
}

const setup = () => {
  const utils = render(<InputRendered />);
  const input = utils.getByTestId("test-input") as HTMLInputElement;
  return {
    input,
    ...utils,
  };
};

describe("Input render", () => {
  it("should render an input", () => {
    const { input } = setup();
    expect(input).not.toBeNull();
    expect(input).not.toBeUndefined();
    expect(input).toHaveStyleRule("outline", "none");
    expect(input).toHaveStyleRule("max-width", "100%");
  });

  it("should change value", () => {
    const { input } = setup();
    fireEvent.change(input, { target: { value: "23" } });
    expect(input.value).toBe("23");
    fireEvent.change(input, { target: { value: "" } });
    expect(input.value).toBe("");
  });
});
