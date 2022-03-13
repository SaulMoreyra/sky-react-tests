import React from "react";
import {
  InputContainerStyled,
  InputLabelStyled,
  InputMessageStyled,
} from "./InputBase.styled";

export type InputBaseProps = {
  message?: string;
  label?: React.ReactNode | string;
  children?: React.ReactNode;
  error?: boolean;
  fullWidth?: boolean;
};

const InputBase = ({
  label,
  message,
  fullWidth,
  children,
  ...props
}: InputBaseProps) => {
  return (
    <InputContainerStyled fullWidth={fullWidth} {...props}>
      <InputLabelStyled error={props.error}>{label}</InputLabelStyled>
      {children}
      <InputMessageStyled error={props.error}>{message}</InputMessageStyled>
    </InputContainerStyled>
  );
};

export default InputBase;
