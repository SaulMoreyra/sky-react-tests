import { Theme } from "@emotion/react";
import styled from "@emotion/styled";
import { ClassAttributes, ElementType, HTMLAttributes } from "react";

type TextType = { align?: "center" | "left" | "right" };

type TextGlobalType = {
  theme?: Theme | undefined;
  as?: ElementType<any> | undefined;
} & ClassAttributes<HTMLHeadingElement | HTMLParagraphElement> &
  HTMLAttributes<HTMLHeadingElement | HTMLParagraphElement> &
  TextType;

export const Title = styled.h1(({ theme, align }: TextGlobalType) => ({
  ...(align ? { textAlign: align } : {}),
  color: theme?.lightBlack,
  fontWeight: 800,
  letterSpacing: 2,
  margin: 0,
  fontSize: theme?.spacing(4),
  "@media (max-width: 960px)": {
    fontSize: theme?.spacing(3.75),
  },
  "@media (max-width: 576px)": {
    fontSize: theme?.spacing(3.5),
  },
}));

export const Subtitle = styled.h2(({ theme, align }: TextGlobalType) => ({
  ...(align ? { textAlign: align } : {}),
  color: theme?.grey,
  fontWeight: 700,
  margin: 0,
  fontSize: theme?.spacing(3),
  "@media (max-width: 960px)": {
    fontSize: theme?.spacing(2.75),
  },
  "@media (max-width: 576px)": {
    fontSize: theme?.spacing(2.5),
  },
}));

export const Body = styled.p(({ theme, align }: TextGlobalType) => ({
  ...(align ? { textAlign: align } : {}),
  color: theme?.grey,
  fontSize: theme?.spacing(2),
}));

export const Label = styled.label(({ theme }: TextGlobalType) => ({
  fontSize: theme?.spacing(1.75),
  fontWeight: 600,
  color: theme?.grey,
}));
