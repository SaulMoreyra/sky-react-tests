import React, { useEffect } from "react";
import { BackdropStyled, LoadingStyled } from "./Backdrop.styles";

type BackdropProps = {
  open: boolean;
};

const Backdrop = ({ open }: BackdropProps) => {
  if (!open) return null;

  return (
    <BackdropStyled>
      <LoadingStyled />
    </BackdropStyled>
  );
};

export default Backdrop;
