import {
  SET_SHIPMENT_OPTIONS,
  SET_SHIPMENT_CURRENT,
  SET_PROVIDER_CURRENT,
  SET_LABEL_CURRENT,
  SET_BEST_OPTION,
  RESET_STATE,
} from "../types/shipmentTypes";

import { ShipmentCreateType } from "interfaces/ShipmentCreate";
import ShipmentApi from "api/ShipmentApi";
import LabelApi from "api/LabelApi";
import ShipmentUtils from "utils/ShipmentUtils";
import { Included } from "interfaces/ShipmentResponse";
import { LabelResponse } from "interfaces/LabelReponse";
import { RootState } from "redux/store";
import { setErrorMessage, setLoading, setSuccessMessage } from "./uiActions";
import { ProviderType } from "redux/reducers/shipmentReducer";
import {
  ERROR_LABEL_CREATION,
  ERROR_LABEL_EXISTS,
  ERROR_NO_SHIPMENTS,
  ERROR_PROVIDERS,
} from "resources/ErrorResource";

export const setShipmentForm = (shipment: ShipmentCreateType) => ({
  type: SET_SHIPMENT_CURRENT,
  payload: shipment,
});

export const setShipmentOptions = (options?: Included[]) => ({
  type: SET_SHIPMENT_OPTIONS,
  payload: options,
});

export const setProvider = (providerId: string) => ({
  type: SET_PROVIDER_CURRENT,
  payload: providerId,
});

export const setCurrentLabel = (label: LabelResponse) => ({
  type: SET_LABEL_CURRENT,
  payload: label,
});

export const setBestOptions = (bestOption: ProviderType) => ({
  type: SET_BEST_OPTION,
  payload: bestOption,
});

export const resetState = () => ({
  type: RESET_STATE,
});

export const getShipmentOptions = (shipment: ShipmentCreateType) => {
  return async (dispatch: Function) => {
    dispatch(setLoading(true));
    try {
      const createdShipment = ShipmentUtils.create(shipment);
      const result = await ShipmentApi.create(createdShipment);
      const options = ShipmentUtils.getOptions(result);

      if (!options?.length) throw Error(ERROR_NO_SHIPMENTS);
      const bestOptions = ShipmentUtils.getBestOptions(options as Included[]);
      dispatch(setShipmentOptions(options));
      dispatch(setBestOptions(bestOptions as ProviderType));
      dispatch(setProvider(bestOptions.better as string));
      dispatch(setSuccessMessage("Proveedores obtenidos"));
    } catch ({ message }: any) {
      dispatch(setErrorMessage((message as string) || ERROR_PROVIDERS));
    }
    dispatch(setLoading(false));
  };
};

export const getLabel = () => {
  return async (dispatch: Function, getState: () => RootState) => {
    dispatch(setLoading(true));
    try {
      const { currentProvider } = getState().shipment;
      const response = await LabelApi.create(Number(currentProvider?.id));
      if (response.data?.attributes?.status === "ERROR")
        throw Error(ERROR_LABEL_CREATION);

      dispatch(setCurrentLabel(response));
      dispatch(setSuccessMessage("Guia obtenida"));
    } catch ({ message }: any) {
      dispatch(setErrorMessage((message as string) || ERROR_LABEL_EXISTS));
    }
    dispatch(setLoading(false));
  };
};
