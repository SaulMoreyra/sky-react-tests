import { Button } from "components";
import { ShipmentCreateType } from "interfaces/ShipmentCreate";
import React, { useCallback, useEffect, useMemo, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getLabel,
  getShipmentOptions,
  resetState,
} from "redux/actions/shipmentAction";
import { ShipmentState } from "redux/reducers/shipmentReducer";
import { RootState } from "redux/store";
import Form from "views/Form";
import ProviderItems from "views/ProviderItems";
import {
  ContainerButtonsStyled,
  ContainerGlobalStyled,
  ContainerStyled,
} from "./FormShipment.styled";

const FormShipment = () => {
  const { options, form, currentProvider, bestOption, currentLabel } =
    useSelector<RootState, ShipmentState>(({ shipment }) => shipment);
  const dispatch = useDispatch();
  const guideRef = useRef<HTMLAnchorElement>();

  const handleOnCheckProviders = () => {
    const { length, weight, width, height, ...rest } = form;
    const newShipment: ShipmentCreateType = {
      ...rest,
      length: Number(length),
      weight: Number(weight),
      width: Number(width),
      height: Number(height),
    };
    dispatch(getShipmentOptions(newShipment));
  };

  const handleRequestGuide = () => {
    dispatch(getLabel());
  };

  const handleOnClearForm = () => {
    dispatch(resetState());
  };

  const handleShowGuide = useCallback(() => {
    const url = currentLabel?.data?.attributes?.label_url;
    if (!url) return;
    const anchorElement = guideRef.current as HTMLAnchorElement;
    anchorElement.href = url;
    setTimeout(() => {
      anchorElement.click();
      dispatch(resetState());
    }, 2000);
  }, [guideRef, currentLabel]);

  useEffect(() => {
    handleShowGuide();
  }, [handleShowGuide]);

  const BUTTON_SHIPMENTS = useMemo(() => {
    const fields = Object.values(form);
    const isValid = fields.every((field) => Boolean(field));
    return isValid;
  }, [form]);

  const BUTTON_GUIDE = useMemo(() => {
    const isValid = BUTTON_SHIPMENTS && Boolean(currentProvider);
    return isValid;
  }, [BUTTON_SHIPMENTS, currentProvider]);

  return (
    <ContainerGlobalStyled>
      <ContainerStyled direction="column">
        <Form />
        <ProviderItems />
        <ContainerButtonsStyled>
          <Button variant="secondary" onClick={handleOnClearForm}>
            Limpiar
          </Button>

          {Boolean(options) ? (
            <Button onClick={handleRequestGuide} disabled={!BUTTON_GUIDE}>
              Generar Guia
            </Button>
          ) : (
            <Button
              onClick={handleOnCheckProviders}
              disabled={!BUTTON_SHIPMENTS}
              type="submit"
            >
              Verificar Costos
            </Button>
          )}
        </ContainerButtonsStyled>
        <a
          ref={guideRef as React.LegacyRef<HTMLAnchorElement>}
          hidden
          target="_blank"
        />
      </ContainerStyled>
    </ContainerGlobalStyled>
  );
};

export default FormShipment;
