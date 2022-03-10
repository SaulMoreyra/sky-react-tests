import { Button, Input, Text } from "components";
import React from "react";
import { ContainerStyled } from "./FormShipment.styled";

const FormShipment = () => {
  return (
    <ContainerStyled direction="column">
      <Text variant="subtitle">Datos del Envio</Text>
      <Input label="CP Origen" placeholder="Ej. 71222" />
      <Input label="CP Destino" placeholder="Ej. 71222" />
      <Text variant="subtitle">Medidas del Paquete</Text>
      <ContainerStyled direction="row">
        <Input label="Largo (cm)" placeholder="Ej. 60" />
        <Input label="Ancho (cm)" placeholder="Ej. 50" />
        <Input label="Alto (cm)" placeholder="Ej. 30" />
        <Input label="Peso (Kg)" placeholder="Ej. 10" />
      </ContainerStyled>
      <div>
        <Button>Verificar Costos</Button>
      </div>
    </ContainerStyled>
  );
};

export default FormShipment;
