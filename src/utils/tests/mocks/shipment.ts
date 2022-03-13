// @ts-nocheck
import { ShipmentResponse } from "interfaces/ShipmentResponse";
const reponse = {
  data: {
    id: "29557",
    type: "shipments",
    attributes: {
      status: "WAITING",
      created_at: "2022-03-11T22:56:45.112-06:00",
      updated_at: "2022-03-11T22:56:45.218-06:00",
    },
    relationships: {
      parcels: {
        data: [
          {
            id: "30078",
            type: "parcels",
          },
        ],
      },
      rates: {
        data: [
          {
            id: "170708",
            type: "rates",
          },
          {
            id: "170707",
            type: "rates",
          },
          {
            id: "170706",
            type: "rates",
          },
          {
            id: "170705",
            type: "rates",
          },
          {
            id: "170704",
            type: "rates",
          },
          {
            id: "170703",
            type: "rates",
          },
          {
            id: "170702",
            type: "rates",
          },
        ],
      },
      address_to: {
        data: {
          id: "59588",
          type: "addresses",
        },
      },
      address_from: {
        data: {
          id: "59587",
          type: "addresses",
        },
      },
      labels: {
        data: [],
      },
      consignment_note_product_class: {
        data: {
          id: 3115,
          name: "Baño y cuerpo",
          code: "53131600",
          subcategory_id: 288,
          created_at: "2021-12-03T12:27:34.662-06:00",
          updated_at: "2021-12-03T12:27:34.662-06:00",
        },
      },
      consignment_note_packaging: {
        data: {
          id: 1,
          code: "1H1",
          name: "Bidones (Tambores) de Plástico de tapa no desmontable",
          created_at: "2022-03-04T08:49:16.354-06:00",
          updated_at: "2022-03-04T08:49:16.354-06:00",
        },
      },
    },
  },
  included: [
    {
      id: "30078",
      type: "parcels",
      attributes: {
        length: "10.0",
        height: "10.0",
        width: "10.0",
        weight: "3.0",
        mass_unit: "KG",
        distance_unit: "CM",
      },
    },
    {
      id: "170708",
      type: "rates",
      attributes: {
        created_at: "2022-03-11T22:56:45.820-06:00",
        updated_at: "2022-03-11T22:56:45.848-06:00",
        amount_local: "134.0",
        currency_local: "MXN",
        provider: "CARSSA",
        service_level_name: "Nacional",
        service_level_code: "NACIONAL",
        service_level_terms: null,
        days: 10,
        duration_terms: null,
        zone: null,
        arrives_by: null,
        out_of_area: false,
        out_of_area_pricing: "0.0",
        total_pricing: "134.0",
        is_ocurre: false,
      },
    },
    {
      id: "170707",
      type: "rates",
      attributes: {
        created_at: "2022-03-11T22:56:45.801-06:00",
        updated_at: "2022-03-11T22:56:45.854-06:00",
        amount_local: "362.0",
        currency_local: "MXN",
        provider: "DHL",
        service_level_name: "DHL Express",
        service_level_code: "EXPRESS",
        service_level_terms: null,
        days: 2,
        duration_terms: null,
        zone: null,
        arrives_by: null,
        out_of_area: false,
        out_of_area_pricing: "0.0",
        total_pricing: "362.0",
        is_ocurre: false,
      },
    },
    {
      id: "170706",
      type: "rates",
      attributes: {
        created_at: "2022-03-11T22:56:45.795-06:00",
        updated_at: "2022-03-11T22:56:45.861-06:00",
        amount_local: "331.0",
        currency_local: "MXN",
        provider: "DHL",
        service_level_name: "DHL Terrestre",
        service_level_code: "STANDARD",
        service_level_terms: null,
        days: 5,
        duration_terms: null,
        zone: null,
        arrives_by: null,
        out_of_area: false,
        out_of_area_pricing: "0.0",
        total_pricing: "331.0",
        is_ocurre: false,
      },
    },
    {
      id: "170705",
      type: "rates",
      attributes: {
        created_at: "2022-03-11T22:56:45.581-06:00",
        updated_at: "2022-03-11T22:56:45.867-06:00",
        amount_local: "219.0",
        currency_local: "MXN",
        provider: "ESTAFETA",
        service_level_name: "Servicio Express",
        service_level_code: "ESTAFETA_NEXT_DAY",
        service_level_terms: null,
        days: 2,
        duration_terms: null,
        zone: null,
        arrives_by: null,
        out_of_area: false,
        out_of_area_pricing: "0.0",
        total_pricing: "219.0",
        is_ocurre: false,
      },
    },
    {
      id: "170704",
      type: "rates",
      attributes: {
        created_at: "2022-03-11T22:56:45.576-06:00",
        updated_at: "2022-03-11T22:56:45.873-06:00",
        amount_local: "174.0",
        currency_local: "MXN",
        provider: "ESTAFETA",
        service_level_name: "Terrestre",
        service_level_code: "ESTAFETA_STANDARD",
        service_level_terms: null,
        days: 5,
        duration_terms: null,
        zone: null,
        arrives_by: null,
        out_of_area: false,
        out_of_area_pricing: "0.0",
        total_pricing: "174.0",
        is_ocurre: false,
      },
    },
    {
      id: "170703",
      type: "rates",
      attributes: {
        created_at: "2022-03-11T22:56:45.446-06:00",
        updated_at: "2022-03-11T22:56:45.880-06:00",
        amount_local: "271.0",
        currency_local: "MXN",
        provider: "FEDEX",
        service_level_name: "Standard Overnight",
        service_level_code: "STANDARD_OVERNIGHT",
        service_level_terms: null,
        days: 2,
        duration_terms: null,
        zone: null,
        arrives_by: null,
        out_of_area: false,
        out_of_area_pricing: "0.0",
        total_pricing: "271.0",
        is_ocurre: false,
      },
    },
    {
      id: "170702",
      type: "rates",
      attributes: {
        created_at: "2022-03-11T22:56:45.429-06:00",
        updated_at: "2022-03-11T22:56:45.886-06:00",
        amount_local: "185.0",
        currency_local: "MXN",
        provider: "FEDEX",
        service_level_name: "Fedex Express Saver",
        service_level_code: "FEDEX_EXPRESS_SAVER",
        service_level_terms: null,
        days: 5,
        duration_terms: null,
        zone: null,
        arrives_by: null,
        out_of_area: false,
        out_of_area_pricing: "0.0",
        total_pricing: "185.0",
        is_ocurre: false,
      },
    },
    {
      id: "59588",
      type: "addresses",
      attributes: {
        name: "Jorge Fernández",
        company: "-",
        address1: "Av. Lázaro Cárdenas #234",
        address2: "Americana",
        city: "Guadalajara",
        province: "Jalisco",
        zip: "44100",
        country: "MX",
        phone: "5555555555",
        email: "ejemplo@skydropx.com",
        created_at: "2022-03-11T22:56:45.108-06:00",
        updated_at: "2022-03-11T22:56:45.108-06:00",
        reference: "Frente a tienda de abarro",
        province_code: "JA",
        contents: "Hola",
      },
    },
    {
      id: "59587",
      type: "addresses",
      attributes: {
        name: "Jose Fernando",
        company: "skydropx",
        address1: "Av. Principal #234",
        address2: "Centro",
        city: "Azcapotzalco",
        province: "Ciudad de México",
        zip: "02900",
        country: "MX",
        phone: "5555555555",
        email: "skydropx@email.com",
        created_at: "2022-03-11T22:56:45.100-06:00",
        updated_at: "2022-03-11T22:56:45.100-06:00",
        reference: null,
        province_code: "DF",
        contents: null,
      },
    },
  ],
} as ShipmentResponse;

export { reponse };
