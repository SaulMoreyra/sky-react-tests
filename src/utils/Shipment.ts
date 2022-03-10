import { ShipmentCreate } from "interfaces/ShipmentCreate";
import { shipment } from "resources/ShipmentResource";

type CreateType = {
  cpTo: string;
  cpFrom: string;
  lenght: number;
  height: number;
  width: number;
  weight: number;
};

const create = ({
  cpTo,
  cpFrom,
  lenght,
  height,
  width,
  weight,
}: CreateType) => {
  const newShipment: ShipmentCreate = { ...shipment };
  newShipment.address_from.zip = cpFrom;
  newShipment.address_to.zip = cpTo;
  const [firstParcel] = newShipment.parcels;
  newShipment.parcels[0] = { ...firstParcel, length, height, width, weight };
};

export default { create };
