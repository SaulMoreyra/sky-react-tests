import { Theme } from "@emotion/react";
import styled from "@emotion/styled";
import { ClassAttributes, ElementType, InputHTMLAttributes } from "react";

type InputProps = {
  theme?: Theme | undefined;
  as?: ElementType<any> | undefined;
} & ClassAttributes<HTMLInputElement> &
  InputHTMLAttributes<HTMLInputElement> & {
    error?: boolean;
    fullWidth?: boolean;
  };

export const InputBaseStyled = styled.input(
  ({ theme, error, fullWidth }: InputProps) => ({
    outline: "none",
    borderRadius: theme?.spacing(3),
    padding: theme?.spacing(1, 2),
    height: theme?.spacing(6),
    width: fullWidth ? "100%" : "unset",
    maxWidth: "100%",
    border: `2px solid ${error ? theme?.error : theme?.lightGrey}`,
    fontSize: theme?.spacing(2),
    backgroundColor: theme?.fade(theme.grey, 0.02),
    "&:focus": {
      backgroundColor: theme?.fade(theme.grey, 0.04),
    },
    "&::placeholder": {
      color: theme?.fade(theme.grey, 0.4),
    },
  })
);
