import React, { useState } from "react";
import { fireEvent, render } from "@testing-library/react";
import { matchers } from "@emotion/jest";
import Select from "./Select";
import type { SelectProps } from "./Select";
import ThemeProvider from "providers/ThemeProvider";
import "@testing-library/jest-dom/extend-expect";

expect.extend(matchers);

const SelectWrapped = ({ ...props }: SelectProps) => (
  <ThemeProvider>
    <Select data-testid="test-select" {...props} />
  </ThemeProvider>
);

function SelectRendered() {
  const [value, setValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(event.target.value);
  };

  return (
    <SelectWrapped value={value} onChange={handleChange}>
      <option disabled value="">
        Selecciona
      </option>
      {[1, 2, 3, 4, 5].map((value) => (
        <option key={value} value={value}>
          {value}
        </option>
      ))}
    </SelectWrapped>
  );
}

const setup = () => {
  const utils = render(<SelectRendered />);
  const select = utils.getByTestId("test-select") as HTMLSelectElement;
  return {
    select,
    ...utils,
  };
};

describe("Select render", () => {
  it("should render a Select", () => {
    const { select } = setup();
    expect(select).not.toBeNull();
    expect(select).not.toBeUndefined();
  });

  it("should change value", () => {
    const { select } = setup();
    fireEvent.change(select, { target: { value: "5" } });
    expect(select.value).toBe("5");
    fireEvent.change(select, { target: { value: "1" } });
    expect(select.value).toBe("1");
  });
});
