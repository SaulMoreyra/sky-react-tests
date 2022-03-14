import { Theme } from "@emotion/react";
import styled from "@emotion/styled";
import { Card } from "components";
import { CardProps } from "components/Card/Card";
import { CardContainerStyled } from "components/Card/Card.styled";
import { ClassAttributes, ElementType, HTMLAttributes } from "react";

export const ContainerTextStyled = styled.div(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  padding: theme?.spacing(0, 1),
  fontWeight: 700,
}));

type CardProviderProps = {
  theme?: Theme | undefined;
  as?: ElementType<any> | undefined;
} & ClassAttributes<HTMLDivElement> &
  HTMLAttributes<HTMLDivElement> & { selected: boolean };
