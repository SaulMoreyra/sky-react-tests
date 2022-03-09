import { ProviderProps } from "interfaces/Provider";
import React from "react";

export const convine = (
  ...providers: Array<(props: ProviderProps) => React.ReactElement>
) => {
  return ({ children }: { children: React.ReactElement }) => {
    return providers.reduceRight(
      (child, Provider) => <Provider>{child}</Provider>,
      children
    );
  };
};

export default { convine };
