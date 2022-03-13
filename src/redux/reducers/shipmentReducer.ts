import { LabelResponse } from "interfaces/LabelReponse";
import { ShipmentCreateType } from "interfaces/ShipmentCreate";
import { Included } from "interfaces/ShipmentResponse";
import {
  SET_SHIPMENT_OPTIONS,
  SET_SHIPMENT_CURRENT,
  SET_PROVIDER_CURRENT,
  SET_LABEL_CURRENT,
  SET_BEST_OPTION,
  RESET_STATE,
} from "../types/shipmentTypes";

export type PriceType = { id?: string; price?: string };
export type ProviderType = { better: string; faster: string; cheaper: string };

export type ShipmentState = {
  form: ShipmentCreateType;
  currentProvider: null | Included;
  options: Included[] | null;
  currentLabel?: LabelResponse | null;
  bestOption: ProviderType;
};

const initialState: ShipmentState = {
  form: {
    zipTo: "71222",
    zipFrom: "41100",
    length: "50",
    height: "30",
    width: "30",
    weight: "10",
  },
  currentProvider: null,
  options: null,
  currentLabel: null,
  bestOption: {
    better: "",
    faster: "",
    cheaper: "",
  },
};

type ActionType = {
  payload: any; // TYPE THIS
  type:
    | typeof SET_SHIPMENT_OPTIONS
    | typeof SET_SHIPMENT_CURRENT
    | typeof SET_PROVIDER_CURRENT
    | typeof SET_LABEL_CURRENT
    | typeof SET_BEST_OPTION
    | typeof RESET_STATE;
};

const reducer = (state = initialState, action: ActionType): ShipmentState => {
  switch (action.type) {
    case SET_SHIPMENT_CURRENT: {
      const { payload } = action;
      return { ...state, form: payload };
    }
    case SET_SHIPMENT_OPTIONS: {
      const { payload } = action;
      return { ...state, options: payload };
    }
    case SET_LABEL_CURRENT: {
      const { payload } = action;
      return { ...state, currentLabel: payload };
    }
    case SET_PROVIDER_CURRENT: {
      const { payload } = action;
      const provider = state.options?.find(({ id }) => id === payload);
      return { ...state, currentProvider: provider as Included };
    }
    case SET_BEST_OPTION: {
      const { payload } = action;
      return { ...state, bestOption: payload };
    }
    case RESET_STATE: {
      return initialState;
    }
    default:
      return state;
  }
};

export default reducer;
