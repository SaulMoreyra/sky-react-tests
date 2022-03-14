import styled from "@emotion/styled";

export const GridCardContainer = styled.div(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: 5,
  "& > div": {
    flex: "0 0 80%",
    padding: theme.spacing(0.5),
    "@media (max-width: 960px)": {
      flex: "0 0 100%",
      paddingTop: theme.spacing(2),
    },
  },
}));

export const RangeContainerStyled = styled.div(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-evenly",
  gap: 5,
  "& > div": {
    flex: "0 0 40%",
    padding: theme.spacing(0.5),
    "@media (max-width: 960px)": {
      flex: "0 0 80%",
      paddingTop: theme.spacing(2),
    },
  },
}));
