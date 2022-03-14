import { Theme } from "@emotion/react";
import styled from "@emotion/styled";
import { ClassAttributes, ElementType, HTMLAttributes } from "react";

type CardContainerStyledProps = {
  theme?: Theme | undefined;
  as?: ElementType<any> | undefined;
} & ClassAttributes<HTMLDivElement> &
  HTMLAttributes<HTMLDivElement> & { selected?: boolean };

export const CardContainerStyled = styled.div(
  ({ theme, selected }: CardContainerStyledProps) => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    boxShadow: `
    0px 2px 1px -1px rgb(0 0 0 / 20%), 
    0px 1px 1px 0px rgb(0 0 0 / 14%), 
    0px 1px 3px 0px rgb(0 0 0 / 12%)
  `,
    borderRadius: theme?.spacing(2),
    border: `1px solid ${selected ? theme?.primary : theme?.white}`,
    backgroundColor: selected
      ? theme?.fade(theme?.primary, 0.05)
      : theme?.white,
    "&:hover": {
      ...(selected
        ? {}
        : { backgroundColor: theme?.fade(theme.lightGrey, 0.2) }),
    },
  })
);

export const CardArticleContainer = styled.div(({ theme }) => ({
  padding: theme.spacing(2),
  flex: "0 0 50%",
  display: "flex",
  flexDirection: "column",
  ":nth-child(2n)": {
    alignItems: "center",
  },
}));
