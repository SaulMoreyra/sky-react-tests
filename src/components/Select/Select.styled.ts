import { Theme } from "@emotion/react";
import styled from "@emotion/styled";
import { ClassAttributes, ElementType, SelectHTMLAttributes } from "react";

type SelectProps = {
  theme?: Theme | undefined;
  as?: ElementType<any> | undefined;
} & ClassAttributes<HTMLSelectElement> &
  SelectHTMLAttributes<HTMLSelectElement> & {
    error?: boolean;
    fullWidth?: boolean;
  };

export const SelectBaseStyled = styled.select(
  ({ theme, error, fullWidth }: SelectProps) => ({
    MozAppearance: "none",
    WebkitAppearance: "none",
    appearance: "none",
    outline: "none",
    borderRadius: theme?.spacing(3),
    padding: theme?.spacing(1, 2),
    height: theme?.spacing(6),
    width: fullWidth ? "100%" : "unset",
    border: `2px solid ${error ? theme?.error : theme?.lightGrey}`,
    fontSize: theme?.spacing(2),
    backgroundColor: theme?.fade(theme.grey, 0.02),
    "&:focus": {
      backgroundColor: theme?.fade(theme.grey, 0.04),
    },
  })
);
