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
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "0 auto",
  maxWidth: "50%",
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

export const ContainerSizesStyled = styled(ContainerBase)(() => ({
  gridTemplateColumns: "1fr 1fr 1fr 1fr",
  "@media (max-width: 960px)": {
    gridTemplateColumns: "1fr 1fr",
    gridTemplateRows: "1fr 1fr",
  },
}));

export const ContainerButtonsStyled = styled(ContainerBase)(() => ({
  display: "flex",
  justifyContent: "space-between",
  "@media (max-width: 960px)": {
    flexDirection: "column",
  },
}));

export const ContainerZipsStyled = styled(ContainerBase)(() => ({
  gridTemplateColumns: "1fr 1fr",
  "@media (max-width: 960px)": {
    gridTemplateColumns: "auto",
    gridTemplateRows: "1fr 1fr",
  },
}));

export const ContainerProviderStyled = styled(ContainerBase)(() => ({
  gridTemplateColumns: "1fr 1fr 1fr",
  "@media (max-width: 960px)": {
    gridTemplateColumns: "auto",
    gridTemplateRows: "1fr 1fr 1fr",
  },
}));

export const ContainerTextStyled = styled.div(({ theme }: ContainerType) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  padding: theme?.spacing(0, 1),
  fontWeight: 700,
}));
