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
  SET_MAX_RANGES,
  SET_PRICES_RANGES,
  SET_DAYS_RANGES,
} from "../types/shipmentTypes";

export type PriceType = { id?: string; price?: string };
export type ProviderType = { better: string; faster: string; cheaper: string };

export type ShipmentState = {
  form: ShipmentCreateType;
  currentProvider: null | Included;
  options: Included[] | null;
  allShipments: [Object];
  currentLabel?: LabelResponse | null;
  bestOption: ProviderType;
  maxRanges: { price: number; day: number };
  prices: Array<number>;
  days: Array<number>;
};

const initialState: ShipmentState = {
  form: {
    zipTo: "",
    zipFrom: "",
    length: "",
    height: "",
    width: "",
    weight: "",
  },
  allShipments: [{}],
  currentProvider: null,
  options: null,
  currentLabel: null,
  bestOption: {
    better: "",
    faster: "",
    cheaper: "",
  },
  maxRanges: { price: 1000, day: 10 },
  prices: [0, 900],
  days: [0, 1],
};

type ActionType = {
  payload: any; // TYPE THIS
  type:
    | typeof SET_SHIPMENT_OPTIONS
    | typeof SET_SHIPMENT_CURRENT
    | typeof SET_PROVIDER_CURRENT
    | typeof SET_LABEL_CURRENT
    | typeof SET_BEST_OPTION
    | typeof RESET_STATE
    | typeof SET_PRICES_RANGES
    | typeof SET_DAYS_RANGES
    | typeof SET_MAX_RANGES;
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
    case SET_MAX_RANGES: {
      const { maxPrice, maxDays } = action.payload;
      return {
        ...state,
        maxRanges: { price: maxPrice, day: maxDays },
        prices: [0, maxPrice],
        days: [0, maxDays],
      };
    }
    case SET_PRICES_RANGES: {
      const prices = action.payload;
      return { ...state, prices: prices };
    }
    case SET_DAYS_RANGES: {
      const days = action.payload;
      return { ...state, days };
    }
    case RESET_STATE: {
      return initialState;
    }
    default:
      return state;
  }
};

export default reducer;
