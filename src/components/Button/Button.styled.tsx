import styled from "@emotion/styled";

const BaseButtonStyled = styled.button(({ theme }) => ({
  border: "none",
  cursor: "pointer",
  borderRadius: theme.spacing(4),
  padding: theme.spacing(2, 6),
  fontSize: theme.spacing(2),
  fontWeight: 600,
  letterSpacing: 1.5,
  height: theme.spacing(7),
  display: "flex",
  alignItems: "center",
  gap: 10,
}));

export const PrimaryButtonStyled = styled(BaseButtonStyled)(({ theme }) => ({
  backgroundColor: theme.primary,
  color: theme.white,
  "&:hover": {
    opacity: 0.8,
  },
}));

export const SecondaryButtonStyled = styled(BaseButtonStyled)(({ theme }) => ({
  color: theme.primary,
  border: `2px solid ${theme.primary}`,
  "&:hover": {
    opacity: 0.8,
  },
}));
