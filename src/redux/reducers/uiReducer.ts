import { ColorVariant } from "interfaces/Color";
import { SET_MESSAGE, SET_LOADING } from "../types/uiTypes";

export type PriceType = { id?: string; price?: string };

export type UiState = {
  loading: boolean;
  message: null | { variant: ColorVariant | null; text: string };
};

const initialState: UiState = {
  loading: false,
  message: null,
};

type ActionType = {
  payload: any; // TYPE THIS
  type: typeof SET_MESSAGE | typeof SET_LOADING;
};

const reducer = (state = initialState, action: ActionType): UiState => {
  switch (action.type) {
    case SET_LOADING: {
      const { payload } = action;
      return { ...state, loading: payload };
    }
    case SET_MESSAGE: {
      const { payload } = action;
      return { ...state, message: payload };
    }
    default:
      return state;
  }
};

export default reducer;
