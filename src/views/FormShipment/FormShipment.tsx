import React, {
  Fragment,
  useCallback,
  useEffect,
  useMemo,
  useRef,
} from "react";
import { Button, Chip, Input, Select, Text } from "components";
import { useSelector, useDispatch } from "react-redux";
import {
  ContainerButtonsStyled,
  ContainerGlobalStyled,
  ContainerProviderStyled,
  ContainerSizesStyled,
  ContainerStyled,
  ContainerTextStyled,
  ContainerZipsStyled,
} from "./FormShipment.styled";
import { ShipmentState } from "redux/reducers/shipmentReducer";
import {
  getLabel,
  getShipmentOptions,
  resetState,
  setProvider,
  setShipmentForm,
} from "redux/actions/shipmentAction";
import { ShipmentCreateType } from "interfaces/ShipmentCreate";
import { RootState } from "redux/store";

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

  const handleOnChangeNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    const newValue = value
      .replace(/[^0-9.]/g, "")
      .replace(/(\..*?)\..*/g, "$1");
    dispatch(setShipmentForm({ ...form, [name]: newValue }));
  };

  const handleOnChangeProviderName = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { value } = event.target;
    dispatch(setProvider(value));
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

  const register = (name: keyof typeof form) => ({
    name,
    onChange: handleOnChangeNumber,
    value: form[name],
    pattern: "[0-9]",
  });

  const LABEL_BESY_OPTION = useMemo(() => {
    const id = currentProvider?.id;
    if (bestOption.better === id) return "Mejor opción ⚡💸";
    if (bestOption.cheaper === id) return "Más Barata 💸";
    if (bestOption.faster === id) return "Más Rápida ⚡";
    return "";
  }, [currentProvider]);

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
        <Text variant="subtitle">Datos del Envio</Text>
        <ContainerZipsStyled>
          <Input
            fullWidth
            maxLength={5}
            label="CP Origen"
            placeholder="Ej. 71222"
            {...register("zipFrom")}
          />
          <Input
            fullWidth
            maxLength={5}
            label="CP Destino"
            placeholder="Ej. 71222"
            {...register("zipTo")}
          />
        </ContainerZipsStyled>
        <Text variant="subtitle">Medidas del Paquete</Text>
        <ContainerSizesStyled>
          <Input
            maxLength={3}
            fullWidth
            label="Largo (cm)"
            placeholder="Ej. 60"
            {...register("length")}
          />
          <Input
            maxLength={3}
            fullWidth
            label="Ancho (cm)"
            placeholder="Ej. 50"
            {...register("width")}
          />
          <Input
            maxLength={3}
            fullWidth
            label="Alto (cm)"
            placeholder="Ej. 30"
            {...register("height")}
          />
          <Input
            maxLength={3}
            fullWidth
            label="Peso (Kg)"
            placeholder="Ej. 10"
            {...register("weight")}
          />
        </ContainerSizesStyled>

        {Boolean(options) && (
          <Fragment>
            <Text variant="subtitle">Paqueteria</Text>
            <div>
              <Select
                label="Proveedor"
                value={currentProvider?.id || ""}
                onChange={handleOnChangeProviderName}
              >
                <option disabled value="">
                  Selecciona
                </option>
                {options?.map(({ id, attributes }) => (
                  <option key={id} value={id}>
                    {attributes?.provider} {attributes?.service_level_name}
                  </option>
                ))}
              </Select>
            </div>
            <ContainerProviderStyled>
              <ContainerTextStyled>
                <Text variant="body">
                  Precio por envío: {currentProvider?.attributes?.total_pricing}
                </Text>
              </ContainerTextStyled>
              <ContainerTextStyled>
                <Text variant="body">
                  Dias de Entrega: {currentProvider?.attributes?.days}
                </Text>
              </ContainerTextStyled>
              {LABEL_BESY_OPTION && (
                <div>
                  <Chip variant={"success"}>{LABEL_BESY_OPTION}</Chip>
                </div>
              )}
            </ContainerProviderStyled>
          </Fragment>
        )}

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
