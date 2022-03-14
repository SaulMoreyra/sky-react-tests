import styled from "@emotion/styled";

const ContainerBase = styled.div(({ theme }) => ({
  display: "grid",
  gap: theme?.spacing(1),
}));

export const ContainerZipsStyled = styled(ContainerBase)(() => ({
  gridTemplateColumns: "1fr 1fr",
  "@media (max-width: 960px)": {
    gridTemplateColumns: "auto",
    gridTemplateRows: "1fr 1fr",
  },
}));

export const ContainerSizesStyled = styled(ContainerBase)(() => ({
  gridTemplateColumns: "1fr 1fr 1fr 1fr",
  "@media (max-width: 960px)": {
    gridTemplateColumns: "1fr 1fr",
    gridTemplateRows: "1fr 1fr",
  },
}));
