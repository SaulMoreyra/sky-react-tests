import { Input, Text } from "components";
import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setShipmentForm } from "redux/actions/shipmentAction";
import { ShipmentState } from "redux/reducers/shipmentReducer";
import { RootState } from "redux/store";
import { ContainerSizesStyled, ContainerZipsStyled } from "./Form.styled";

type Props = {};

const Form = (props: Props) => {
  const { form } = useSelector<RootState, ShipmentState>(
    ({ shipment }) => shipment
  );
  const dispatch = useDispatch();

  const handleOnChangeNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    const newValue = value.replace(/[^0-9.]/g, "").replace(/(\..*?)\..*/g, "");
    dispatch(setShipmentForm({ ...form, [name]: newValue }));
  };

  const register = (name: keyof typeof form) => ({
    name,
    onChange: handleOnChangeNumber,
    value: form[name],
    pattern: "[0-9]",
  });

  return (
    <Fragment>
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
    </Fragment>
  );
};

export default Form;
