import { Text } from "components";
import React from "react";
import { CardContainerStyled, CardArticleContainer } from "./Card.styled";

export type CardProps = {
  title: string;
  subtitle: string;
  children?: React.ReactNode | React.ReactNode[];
  selected?: boolean;
  onClick: () => void;
};

const CardProvider = ({
  title,
  subtitle,
  children,
  selected,
  onClick,
  ...props
}: CardProps) => {
  return (
    <CardContainerStyled onClick={onClick} selected={selected} {...props}>
      <CardArticleContainer>
        <Text variant="subtitle">{title}</Text>
        <Text variant="body">{subtitle}</Text>
      </CardArticleContainer>
      <CardArticleContainer>{children}</CardArticleContainer>
    </CardContainerStyled>
  );
};

export default CardProvider;
