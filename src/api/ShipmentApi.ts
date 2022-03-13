import axios from "config/Axios";
import { ShipmentCreate } from "interfaces/ShipmentCreate";
import { ShipmentResponse } from "interfaces/ShipmentResponse";

const create = async (body: ShipmentCreate) => {
  const { data } = await axios.post<ShipmentResponse>("/shipments", body);
  return data;
};

export default { create };
