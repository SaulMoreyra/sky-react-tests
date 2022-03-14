import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const BackdropStyled = styled.div(({ theme }) => ({
  background: theme.fade(theme.black, 0.2),
  position: "fixed",
  minHeight: "100%",
  minWidth: "100%",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 2,
}));

export const LoadingStyled = styled.div(({ theme }) => ({
  border: `${theme.spacing(1)} solid ${theme.fade(theme.primary, 0.1)}`,
  borderTop: `${theme.spacing(1)} solid ${theme.primary}`,
  borderRadius: "50%",
  width: theme.spacing(7.5),
  height: theme.spacing(7.5),
  animation: `${spin} infinite 2s linear`,
}));
