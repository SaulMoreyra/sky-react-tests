import { Theme } from "@emotion/react";
import styled from "@emotion/styled";
import {
  ClassAttributes,
  ElementType,
  HTMLAttributes,
  LabelHTMLAttributes,
} from "react";

type ContainerProps = {
  theme?: Theme | undefined;
  as?: ElementType<any> | undefined;
} & ClassAttributes<HTMLDivElement> &
  HTMLAttributes<HTMLDivElement> & {
    fullWidth?: boolean;
  };

type LabelProps = {
  theme?: Theme | undefined;
  as?: ElementType<any> | undefined;
} & ClassAttributes<HTMLLabelElement> &
  LabelHTMLAttributes<HTMLLabelElement> & {
    error?: boolean;
  };

export const InputContainerStyled = styled.div(
  ({ theme, fullWidth }: ContainerProps) => ({
    display: "flex",
    flexDirection: "column",
    color: theme?.primaryLight,
    width: fullWidth ? "100%" : "unset",
    maxWidth: "100%",
  })
);

export const InputLabelStyled = styled.label(
  ({ theme, error }: LabelProps) => ({
    fontSize: theme?.spacing(1.75),
    fontWeight: 600,
    color: error ? theme?.error : theme?.grey,
    padding: theme?.spacing(0, 1),
  })
);

export const InputMessageStyled = styled.span(
  ({ theme, error }: LabelProps) => ({
    fontSize: theme?.spacing(1.5),
    color: error ? theme?.error : theme?.grey,
    padding: theme?.spacing(0, 1),
  })
);
