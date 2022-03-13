import { Included } from "interfaces/ShipmentResponse";
import ShipmentUtils from "utils/ShipmentUtils";
import { reponse } from "./mocks/shipment";

const newShipmentBasic = {
  zipTo: "71222",
  zipFrom: "41100",
  length: "50",
  height: "30",
  width: "30",
  weight: "10",
};

let shipmentOptions: Included[] | undefined;

describe("ShipmentUtils", () => {
  it("should return a new shipment", () => {
    const newShipment = ShipmentUtils.create(newShipmentBasic);

    expect(newShipment.address_from.zip).toBe(newShipmentBasic.zipFrom);
    expect(newShipment.address_to.zip).toBe(newShipmentBasic.zipTo);
    const [firstParcel] = newShipment.parcels;
    expect(firstParcel.length).toBe(Number(newShipmentBasic.length));
    expect(firstParcel.height).toBe(Number(newShipmentBasic.height));
    expect(firstParcel.width).toBe(Number(newShipmentBasic.width));
    expect(firstParcel.weight).toBe(Number(newShipmentBasic.weight));
  });

  it("should return only rates providers", () => {
    shipmentOptions = ShipmentUtils.getOptions(reponse);
    expect((shipmentOptions?.length as Number) > 0).toBeTruthy();
    shipmentOptions?.forEach(({ type }) => {
      expect(type).toBe("rates");
    });
  });

  it("should return a faster option", () => {
    const faster = ShipmentUtils.getFasterOption(shipmentOptions as Included[]);
    expect(faster.attributes?.days).toBe(2);
  });

  it("should return a cheaper option", () => {
    const faster = ShipmentUtils.getCheaperOption(
      shipmentOptions as Included[]
    );
    expect(faster.attributes?.total_pricing).toBe("134.0");
  });

  it("should return a better option", () => {
    const better = ShipmentUtils.getBetterOption(shipmentOptions as Included[]);
    expect(better.attributes?.total_pricing).toBe("219.0");
    expect(better.attributes?.days).toBe(2);
  });
});
