import React, { useState } from "react";
import { render, fireEvent } from "@testing-library/react";
import { matchers } from "@emotion/jest";
import Toast from "./Toast";
import type { ToastProps } from "./Toast";
import ThemeProvider from "providers/ThemeProvider";
import theme from "theme/DefaultTheme";
import "@testing-library/jest-dom/extend-expect";

expect.extend(matchers);

const ToastWrapped = ({ ...props }: ToastProps) => (
  <ThemeProvider>
    <Toast data-testid="toast" {...props} />
  </ThemeProvider>
);

function ToastRendered() {
  const [open, setOpen] = useState(true);

  const handleChange = () => {
    setOpen(false);
  };

  return (
    <ToastWrapped open={open} onClose={handleChange}>
      Hola como estas
    </ToastWrapped>
  );
}

const setup = () => {
  const utils = render(<ToastRendered />);
  const toast = utils.getByTestId("toast");
  const close = utils.getByTestId("toast-close");
  return {
    toast,
    close,
    ...utils,
  };
};

describe("Toast render", () => {
  it("should render a default toast", () => {
    const { getByTestId } = render(
      <ToastWrapped open={true}>Hola como estas</ToastWrapped>
    );
    expect(getByTestId).not.toBeNull();
    const element = getByTestId("toast");
    expect(element).not.toBeUndefined();
    expect(element).toHaveTextContent("Hola como estas");
  });

  it("should render a state toast", async () => {
    const { toast, close } = setup();

    expect(toast).not.toBeNull();
    expect(toast).not.toBeUndefined();
    expect(toast).toHaveTextContent("Hola como estas");
    expect(toast).toHaveStyleRule("position", "fixed");
    expect(toast).toHaveStyleRule("display", "flex");

    fireEvent.click(close);
    expect(toast).toHaveStyleRule("display", "none");
  });

  it("should render a error toast", () => {
    const { getByTestId } = render(
      <ToastWrapped variant="error" open={true}>
        Hola como estas
      </ToastWrapped>
    );
    const element = getByTestId("toast");
    expect(element).toHaveStyleRule("background-color", theme.error);
  });

  it("should render a warning toast", () => {
    const { getByTestId } = render(
      <ToastWrapped variant="warning" open={true}>
        Hola como estas
      </ToastWrapped>
    );
    const element = getByTestId("toast");
    expect(element).toHaveStyleRule("background-color", theme.warning);
  });

  it("should render a info toast", () => {
    const { getByTestId } = render(
      <ToastWrapped variant="info" open={true}>
        Hola como estas
      </ToastWrapped>
    );
    const element = getByTestId("toast");
    expect(element).toHaveStyleRule("background-color", theme.info);
  });

  it("should render a success toast", () => {
    const { getByTestId } = render(
      <ToastWrapped variant="success" open={true}>
        Hola como estas
      </ToastWrapped>
    );
    const element = getByTestId("toast");
    expect(element).toHaveStyleRule("background-color", theme.success);
  });
});
