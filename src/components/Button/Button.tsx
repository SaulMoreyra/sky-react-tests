import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import { PrimaryButtonStyled, SecondaryButtonStyled } from "./Button.styled";

export type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  children?: string | JSX.Element | JSX.Element[];
  variant?: "primary" | "secondary";
  disabled?: boolean;
};

const Button = ({ variant = "primary", children, ...props }: ButtonProps) => {
  const Component =
    variant === "primary" ? PrimaryButtonStyled : SecondaryButtonStyled;

  return (
    <Component data-test-id="button" {...props}>
      {children}
    </Component>
  );
};

export default Button;
