import styled from "@emotion/styled";

export const NavContainerStyled = styled.div(({ theme }) => ({
  position: "fixed",
  width: "100%",
  webkitBoxShadow: `0px 0px 30px -14px ${theme?.black}`,
  transition: "0.5s",
  boxShadow: `0px 0px 30px -14px ${theme?.black}`,
  zIndex: 1,
  backgroundColor: theme.white,
}));

export const NavStyled = styled.nav(({ theme }) => ({
  maxWidth: theme.breakpoints.xl,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  color: theme.white,
  padding: theme.spacing(0, 4),
  height: theme.spacing(8),
  margin: "0 auto",
}));

export const ContainerLinksStyled = styled.div(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(1),
  "& > button": {
    padding: theme.spacing(2),
    height: theme.spacing(4),
  },
}));

export const ImageStyled = styled.img(({ theme }) => ({
  height: 40,
  "@media (max-width: 960px)": {
    height: 24,
  },
}));
