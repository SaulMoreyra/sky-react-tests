import React from "react";
import { PrimaryButtonStyled, SecondaryButtonStyled } from "./Button.styled";

export type ButtonProps = {
  children?: string | JSX.Element | JSX.Element[];
  type?: "primary" | "secondary";
  onClick?: () => void;
};

const Button = ({ type = "primary", children, ...props }: ButtonProps) => {
  const Component =
    type === "primary" ? PrimaryButtonStyled : SecondaryButtonStyled;

  return (
    <Component data-test-id="button" {...props}>
      {children}
    </Component>
  );
};

export default Button;
