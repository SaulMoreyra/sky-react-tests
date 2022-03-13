import { ColorVariant } from "interfaces/Color";
import { SET_LOADING, SET_MESSAGE } from "redux/types/uiTypes";

export const setLoading = (loading: boolean) => ({
  type: SET_LOADING,
  payload: loading,
});

export const setMessage = (message: {
  variant: ColorVariant;
  text: string;
}) => ({
  type: SET_MESSAGE,
  payload: message,
});

export const setErrorMessage = (text: string) => ({
  type: SET_MESSAGE,
  payload: { variant: "error", text },
});

export const setSuccessMessage = (text: string) => ({
  type: SET_MESSAGE,
  payload: { variant: "success", text },
});

export const setWarningMessage = (text: string) => ({
  type: SET_MESSAGE,
  payload: { variant: "warning", text },
});

export const setInfoMessage = (text: string) => ({
  type: SET_MESSAGE,
  payload: { variant: "info", text },
});

export const clearMessage = () => ({
  type: SET_MESSAGE,
  payload: null,
});
