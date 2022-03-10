/* prettier-ignore */

export interface ShipmentCreate {
  address_from:                    Address;
  parcels:                         Parcel[];
  address_to:                      Address;
  consignment_note_class_code:     string;
  consignment_note_packaging_code: string;
}

/* prettier-ignore */
export interface Address {
  province:  string;
  city:      string;
  name:      string;
  zip:       string;
  country:   string;
  address1:  string;
  company:   string;
  address2:  string;
  phone:     string;
  email:     string;
  reference: string;
  contents:  string;
}

/* prettier-ignore */
export interface Parcel {
  weight:        number;
  distance_unit: string;
  mass_unit:     string;
  height:        number;
  width:         number;
  length:        number;
}
