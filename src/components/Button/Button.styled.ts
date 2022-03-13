import styled from "@emotion/styled";

const BaseButtonStyled = styled.button(({ theme, disabled }) => ({
  border: "none",
  cursor: "pointer",
  borderRadius: theme?.spacing(3),
  padding: theme?.spacing(1, 4),
  fontSize: theme?.spacing(2),
  fontWeight: 500,
  letterSpacing: 1.5,
  height: theme?.spacing(6),
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 10,
  transition: "0.25s",
  ...(disabled ? { cursor: "not-allowed" } : {}),
}));

export const PrimaryButtonStyled = styled(BaseButtonStyled)(
  ({ theme, disabled }) => ({
    backgroundColor: disabled ? theme.lightGrey : theme.primary,
    border: `2px solid ${disabled ? theme.lightGrey : theme.primary}`,
    color: disabled ? theme.fade(theme.grey, 0.8) : theme.white,
    ...(!disabled
      ? {
          "&:hover": {
            backgroundColor: theme.primaryDark,
            border: `2px solid ${theme.primaryDark}`,
          },
        }
      : {}),
  })
);

export const SecondaryButtonStyled = styled(BaseButtonStyled)(
  ({ theme, disabled }) => ({
    color: disabled ? theme.fade(theme.grey, 0.8) : theme.primary,
    backgroundColor: "unset",
    border: `2px solid ${disabled ? theme.lightGrey : theme.primaryLight}`,
    ...(!disabled
      ? {
          "&:hover": {
            color: theme.primaryDark,
            border: `2px solid ${theme.primaryDark}`,
          },
        }
      : {}),
  })
);
