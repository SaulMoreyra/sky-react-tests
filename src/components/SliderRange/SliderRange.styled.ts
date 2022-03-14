import { Theme } from "@emotion/react";
import styled from "@emotion/styled";
import { ClassAttributes, ElementType, HTMLAttributes } from "react";

export const RangeContainerStyled = styled.div(() => ({
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
}));

export const SliderRangeContainerStyled = styled.div(({ theme }) => ({
  padding: theme.spacing(2, 4),
}));

export const RangeTrackStyled = styled.div(({ style }) => ({
  ...style,
  height: "36px",
  display: "flex",
  width: "100%",
}));

type BaseDivType = {
  theme?: Theme | undefined;
  as?: ElementType<any> | undefined;
} & ClassAttributes<HTMLDivElement> &
  HTMLAttributes<HTMLDivElement>;

type RangeTrackChildrenStyledType = BaseDivType & {
  background: string;
};

export const RangeTrackChildrenStyled = styled.div(
  ({ background }: RangeTrackChildrenStyledType) => ({
    height: "5px",
    width: "100%",
    borderRadius: "4px",
    alignSelf: "center",
    background,
  })
);

export const ThumbContainerStyled = styled.div(({ style, theme }) => ({
  ...style,
  height: "42px",
  width: "42px",
  borderRadius: "4px",
  backgroundColor: "#FFF",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  boxShadow: "0px 2px 6px #AAA",
}));

export const ThumbChildrenStyled = styled.div(({ theme }) => ({
  position: "absolute",
  top: "-28px",
  color: "#fff",
  fontWeight: "bold",
  fontSize: "14px",
  padding: "4px",
  borderRadius: "4px",
  backgroundColor: theme.primary,
}));

type ThumbSecondChildrenStyledType = BaseDivType & {
  isDragged: boolean;
};
export const ThumbSecondChildrenStyled = styled.div(
  ({ theme, isDragged }: ThumbSecondChildrenStyledType) => ({
    height: "16px",
    width: "5px",
    backgroundColor: isDragged ? theme?.primary : "#CCC",
  })
);
