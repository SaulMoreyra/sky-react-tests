import React from "react";
import { Body, Subtitle, Title, Label } from "./Text.styled";

export type TextProps = {
  variant?: "title" | "subtitle" | "body" | "label";
  children: React.ReactNode | String | JSX.Element | JSX.Element[];
  align?: "center" | "left" | "right";
};

const texts = {
  title: Title,
  subtitle: Subtitle,
  body: Body,
  label: Label,
};

const Text = ({ variant = "body", children, ...props }: TextProps) => {
  const Component = texts[variant];
  return <Component {...props}>{children}</Component>;
};

export default Text;
