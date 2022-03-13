import { ColorVariant } from "interfaces/Color";
import { VscChromeClose } from "react-icons/vsc";
import React, { useEffect } from "react";
import { ToastStyled } from "./Toast.styled";

type ToastProps = {
  children: React.ReactNode;
  variant: ColorVariant;
  delay: number;
  open: boolean;
  onClose: () => void;
};

const Toast = ({ children, delay, open, onClose, ...props }: ToastProps) => {
  useEffect(() => {
    if (!open) return;
    setTimeout(() => {
      open && onClose();
    }, delay);
  }, [delay, open]);

  return (
    <ToastStyled open={open} {...props}>
      {children} <VscChromeClose onClick={onClose} />
    </ToastStyled>
  );
};

export default Toast;
