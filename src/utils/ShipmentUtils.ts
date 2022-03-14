import { ShipmentCreateType, ShipmentCreate } from "interfaces/ShipmentCreate";
import { Included, ShipmentResponse } from "interfaces/ShipmentResponse";
import { shipment } from "resources/ShipmentResource";

const create = ({
  zipTo,
  zipFrom,
  length,
  height,
  width,
  weight,
}: ShipmentCreateType) => {
  const newShipment: ShipmentCreate = { ...shipment };
  newShipment.address_from.zip = zipFrom;
  newShipment.address_to.zip = zipTo;
  const [firstParcel] = newShipment.parcels;
  newShipment.parcels[0] = {
    ...firstParcel,
    length: Number(length),
    height: Number(height),
    width: Number(width),
    weight: Number(weight),
  };
  return newShipment;
};

const getOptions = (response: ShipmentResponse) => {
  const { included } = response;
  const providers = included?.filter(({ type }) => type === "rates");
  return providers;
};

const getData = (option: Included) => {
  const price = Number(option.attributes?.total_pricing);
  const days = Number(option.attributes?.days);
  return [price, days];
};

const getBetterOption = (options: Included[]) => {
  const cheaperfaster = options.reduce((acc, current) => {
    const [price, daysX1] = getData(current);
    const [accPrice, accDaysX1] = getData(acc);

    // STARNDARIZE VARIABLES
    const priceY1 = price / 100;
    const accPriceY1 = accPrice / 100;

    // WE CALCULATE THE SUM OF THE SQUARE OF THE LEGS
    const hipoPow1 = Math.pow(daysX1, 2) + Math.pow(priceY1, 2);
    const hipoPow2 = Math.pow(accDaysX1, 2) + Math.pow(accPriceY1, 2);

    // WE CALCULATE THE HYPOTENUSE
    const hipo1 = Math.sqrt(hipoPow1);
    const hipo2 = Math.sqrt(hipoPow2);

    if (hipo1 < hipo2) return current;

    return acc;
  }, options[0]);
  return cheaperfaster;
};

const getCheaperOption = (options: Included[]) => {
  const cheaper = options.reduce((acc, current) => {
    const [price, days] = getData(current);
    const [accPrice, accDays] = getData(acc);
    if (price < accPrice || (price === accPrice && days < accDays))
      return current;
    return acc;
  }, options[0]);

  return cheaper;
};

const getFasterOption = (options: Included[]) => {
  const faster = options.reduce((acc, current) => {
    const [price, days] = getData(current);
    const [accPrice, accDays] = getData(acc);

    if (days < accDays || (days === accDays && price < accPrice))
      return current;
    return acc;
  }, options[0]);

  return faster;
};

const getBestOptions = (options: Included[]) => {
  const better = getBetterOption(options).id;
  const cheaper = getCheaperOption(options).id;
  const faster = getFasterOption(options).id;
  return { better, cheaper, faster };
};

export default {
  create,
  getOptions,
  getBestOptions,
  getFasterOption,
  getCheaperOption,
  getBetterOption,
};
