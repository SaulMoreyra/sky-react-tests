import InputBase from "components/InputBase";
import { InputBaseProps } from "components/InputBase/InputBase";
import React, { DetailedHTMLProps, SelectHTMLAttributes } from "react";
import { SelectBaseStyled } from "./Select.styled";

export type SelectProps = DetailedHTMLProps<
  SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
> &
  InputBaseProps;

const Select = ({ label, message, fullWidth, ...props }: SelectProps) => {
  return (
    <InputBase {...{ label, message }}>
      <SelectBaseStyled {...props} fullWidth={fullWidth} />
    </InputBase>
  );
};

export default Select;
