import React from "react";
import { render } from "@testing-library/react";
import { matchers } from "@emotion/jest";
import Backdrop from "./Backdrop";
import type { BackdropProps } from "./Backdrop";
import ThemeProvider from "providers/ThemeProvider";
import "@testing-library/jest-dom/extend-expect";

expect.extend(matchers);

const BackdropWrapped = ({ ...props }: BackdropProps) => (
  <ThemeProvider>
    <Backdrop {...props} />
  </ThemeProvider>
);

describe("Backdrop render", () => {
  it("shouldn't render a backdrop", () => {
    const { getByTestId } = render(<BackdropWrapped open={false} />);
    expect(getByTestId).not.toBeNull();
  });

  it("should render a backdrop", () => {
    const screen = render(<BackdropWrapped open={true} />);
    const element = screen.getByTestId("backdrop");
    expect(element).not.toBeUndefined();
    expect(element).toHaveStyleRule("position", "fixed");
    expect(screen.container.childElementCount).toBe(1);
  });
});
