import InputBase from "components/InputBase";
import { InputBaseProps } from "components/InputBase/InputBase";
import React, { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { InputBaseStyled } from "./Input.styled";

export type InputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> &
  InputBaseProps;

const Input = ({ label, message, fullWidth, ...props }: InputProps) => {
  return (
    <InputBase {...{ label, message, fullWidth }}>
      <InputBaseStyled {...props} fullWidth={fullWidth} />
    </InputBase>
  );
};

export default Input;
