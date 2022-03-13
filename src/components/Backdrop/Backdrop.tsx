import { Theme } from "@emotion/react";
import React, { ClassAttributes, ElementType, HTMLAttributes } from "react";
import { BackdropStyled, LoadingStyled } from "./Backdrop.styles";

export type BackdropProps = {
  theme?: Theme | undefined;
  as?: ElementType<any> | undefined;
} & ClassAttributes<HTMLDivElement> &
  HTMLAttributes<HTMLDivElement> & {
    open: boolean;
  };

const Backdrop = ({ open }: BackdropProps) => {
  if (!open) return null;

  return (
    <BackdropStyled data-testid="backdrop">
      <LoadingStyled />
    </BackdropStyled>
  );
};

export default Backdrop;
