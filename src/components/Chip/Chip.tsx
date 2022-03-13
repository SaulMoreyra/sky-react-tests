import { ColorVariant } from "interfaces/Color";
import React from "react";
import { ChipStyled } from "./Chip.styled";

type ChipProps = {
  children: React.ReactNode;
  variant: ColorVariant;
};

const Chip = ({ children, ...props }: ChipProps) => {
  return <ChipStyled {...props}>{children}</ChipStyled>;
};

export default Chip;
