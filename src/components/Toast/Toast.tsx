import { ColorVariant } from "interfaces/Color";
import { VscChromeClose } from "react-icons/vsc";
import React, { useEffect } from "react";
import { ToastIconContainerStyled, ToastStyled } from "./Toast.styled";

export type ToastProps = {
  children: React.ReactNode;
  variant?: ColorVariant;
  delay?: number;
  open: boolean;
  onClose?: () => void;
};

const Toast = ({
  children,
  delay,
  open,
  onClose,
  variant = "info",
  ...props
}: ToastProps) => {
  useEffect(() => {
    if (!open || !delay) return;
    setTimeout(() => {
      open && onClose?.();
    }, delay);
  }, [delay, open, onClose]);

  return (
    <ToastStyled variant={variant} open={open} {...props}>
      {children}
      <ToastIconContainerStyled data-testid="toast-close" onClick={onClose}>
        <VscChromeClose />
      </ToastIconContainerStyled>
    </ToastStyled>
  );
};

export default Toast;
