import { Theme } from "@emotion/react";
import styled from "@emotion/styled";
import { ColorVariant } from "interfaces/Color";
import { ClassAttributes, ElementType, HTMLAttributes } from "react";

export type ChipType = {
  theme?: Theme | undefined;
  as?: ElementType<any> | undefined;
} & ClassAttributes<HTMLDivElement> &
  HTMLAttributes<HTMLDivElement> & {
    variant: ColorVariant;
  };

export const ChipStyled = styled.div(({ theme, variant }: ChipType) => {
  const color = theme?.getColor(theme as Theme, variant) as string;
  return {
    backgroundColor: theme?.fade(color, 0.1),
    color,
    border: `1px solid ${color}`,
    borderRadius: theme?.spacing(3),
    padding: theme?.spacing(1, 3),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    maxWidth: "max-content",
  };
});
