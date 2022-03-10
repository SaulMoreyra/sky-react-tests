import React, { DetailedHTMLProps, InputHTMLAttributes } from "react";
import {
  InputBaseStyled,
  InputContainerStyled,
  InputLabelStyled,
} from "./Input.styled";

type InputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & { label?: React.ReactNode | string; error?: boolean };

const Input = ({ label, ...props }: InputProps) => {
  return (
    <InputContainerStyled>
      <InputLabelStyled htmlFor="input-base" error={props.error}>
        {label}
      </InputLabelStyled>
      <InputBaseStyled id="input-base" {...props} />
    </InputContainerStyled>
  );
};

export default Input;
