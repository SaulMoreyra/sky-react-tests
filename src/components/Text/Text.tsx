import React from "react";
import { Body, Subtitle, Title, Label } from "./Text.styled";

type Props = {
  variant: "title" | "subtitle" | "body" | "label";
  children: React.ReactNode | String | JSX.Element | JSX.Element[];
  align?: "center" | "left" | "right";
};

const texts = {
  title: Title,
  subtitle: Subtitle,
  body: Body,
  label: Label,
};

const Text = ({ variant, children, ...props }: Props) => {
  const Component = texts[variant];
  return <Component {...props}>{children}</Component>;
};

export default Text;
