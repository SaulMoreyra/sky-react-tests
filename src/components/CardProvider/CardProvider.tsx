import { Card, Text } from "components";
import React, { Fragment } from "react";

export type CardProviderProps = {
  title: string;
  subtitle: string;
  pricing: string;
  days: number;
  selected: boolean;
  children?: React.ReactNode;
  onClick: () => void;
};

const CardProvider = ({
  title,
  subtitle,
  pricing,
  days,
  children,
  selected,
  onClick,
  ...props
}: CardProviderProps) => {
  return (
    <Card
      title={title}
      subtitle={subtitle}
      selected={selected}
      onClick={onClick}
      {...props}
    >
      <Fragment>
        <Text variant="body">
          {"$"}
          {pricing} envío
        </Text>
        <Text variant="body">{days} para la entrega</Text>
        {children}
      </Fragment>
    </Card>
  );
};

export default CardProvider;
