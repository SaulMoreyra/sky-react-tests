import { Theme } from "@emotion/react";
import styled from "@emotion/styled";
import { ColorVariant } from "interfaces/Color";
import { ClassAttributes, ElementType, HTMLAttributes } from "react";

export type ToastType = {
  theme?: Theme | undefined;
  as?: ElementType<any> | undefined;
} & ClassAttributes<HTMLDivElement> &
  HTMLAttributes<HTMLDivElement> & {
    variant: ColorVariant;
    open: boolean;
  };

export const ToastStyled = styled.div(({ theme, variant, open }: ToastType) => {
  const color = theme?.getColor(theme as Theme, variant) as string;
  return {
    backgroundColor: color,
    color: theme?.white,
    border: `1px solid ${color}`,
    borderRadius: theme?.spacing(3),
    padding: theme?.spacing(1, 3),
    position: "fixed",
    top: theme?.spacing(3),
    right: theme?.spacing(3),
    minWidth: theme?.spacing(40),
    transition: "1s",
    display: open ? "flex" : "none",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: theme?.spacing(4),
    "& > svg": {
      cursor: "pointer",
      height: theme?.spacing(4),
      width: theme?.spacing(4),
      padding: theme?.spacing(1),
      "&:hover": {
        backgroundColor: theme?.fade(color, 0.2),
        borderRadius: theme?.spacing(5),
      },
    },
  };
});
