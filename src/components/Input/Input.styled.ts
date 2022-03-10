import { Theme } from "@emotion/react";
import styled from "@emotion/styled";
import {
  ClassAttributes,
  ElementType,
  InputHTMLAttributes,
  LabelHTMLAttributes,
} from "react";

type InputProps = {
  theme?: Theme | undefined;
  as?: ElementType<any> | undefined;
} & ClassAttributes<HTMLInputElement> &
  InputHTMLAttributes<HTMLInputElement> & {
    error?: boolean;
  };

type LabelProps = {
  theme?: Theme | undefined;
  as?: ElementType<any> | undefined;
} & ClassAttributes<HTMLLabelElement> &
  LabelHTMLAttributes<HTMLLabelElement> & {
    error?: boolean;
  };

export const InputBaseStyled = styled.input(({ theme, error }: InputProps) => ({
  outline: "none",
  borderRadius: theme?.spacing(1),
  padding: theme?.spacing(1, 2),
  height: theme?.spacing(6),
  border: `2px solid ${error ? theme?.error : theme?.lightGrey}`,
  fontSize: theme?.spacing(2),
  backgroundColor: theme?.fade(theme.grey, 0.02),
  "&:focus": {
    backgroundColor: theme?.fade(theme.grey, 0.04),
  },
}));

export const InputContainerStyled = styled.div(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  color: theme.primaryLight,
}));

export const InputLabelStyled = styled.label(
  ({ theme, error }: LabelProps) => ({
    fontSize: theme?.spacing(1.75),
    fontWeight: 600,
    color: error ? theme?.error : theme?.grey,
  })
);
