import React from "react";
import { PrimaryButtonStyled, SecondaryButtonStyled } from "./Button.styled";

type Props = {
  children: string | JSX.Element | JSX.Element[];
  type: "primary" | "secondary";
};

const Button = ({ type, children }: Props) => {
  const Component =
    type === "primary" ? PrimaryButtonStyled : SecondaryButtonStyled;

  return <Component>{children}</Component>;
};

export default Button;
