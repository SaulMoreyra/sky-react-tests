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

export const ContainerStyled = styled.div(
  ({ theme, direction }: ContainerType) => ({
    display: "flex",
    flexDirection: direction,
    gap: theme?.spacing(1),
  })
);
