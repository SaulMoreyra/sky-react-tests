import { Theme } from "@emotion/react";
import styled from "@emotion/styled";
import { ClassAttributes, ElementType, HTMLAttributes } from "react";

type ContainerType = {
  theme?: Theme | undefined;
  as?: ElementType<any> | undefined;
} & ClassAttributes<HTMLDivElement> &
  HTMLAttributes<HTMLDivElement> & {
    direction?: "column" | "row";
  };

export const ContainerGlobalStyled = styled.div(({ theme }) => ({
  minHeight: "100vh",
  margin: "0 auto",
  padding: theme.spacing(15, 0),
  maxWidth: theme.breakpoints.md,
  "@media (max-width: 960px)": {
    padding: theme.spacing(5, 3),
    maxWidth: "100%",
  },
}));

export const ContainerStyled = styled.div(
  ({ theme, direction }: ContainerType) => ({
    display: "flex",
    flexDirection: direction,
    gap: theme?.spacing(3),
  })
);

const ContainerBase = styled.div(({ theme }) => ({
  display: "grid",
  gap: theme?.spacing(1),
}));

export const ContainerButtonsStyled = styled(ContainerBase)(() => ({
  display: "flex",
  justifyContent: "space-between",
  "@media (max-width: 960px)": {
    flexDirection: "column",
  },
}));

export const ContainerProviderStyled = styled(ContainerBase)(() => ({
  gridTemplateColumns: "1fr 1fr 1fr",
  "@media (max-width: 960px)": {
    gridTemplateColumns: "auto",
    gridTemplateRows: "1fr 1fr 1fr",
  },
}));
