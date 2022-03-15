import { CardProvider, Chip, SliderRange, Text } from "components";
import React, { Fragment, useCallback, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDays, setPrices, setProvider } from "redux/actions/shipmentAction";
import { ShipmentState } from "redux/reducers/shipmentReducer";
import { RootState } from "redux/store";
import {
  GridCardContainer,
  RangeContainerStyled,
} from "./ProviderItems.styled";

const PRICE_STEP = 100;
const DAYS_STEP = 1;

const ProviderItems = () => {
  const { options, currentProvider, bestOption, prices, days, maxRanges } =
    useSelector<RootState, ShipmentState>(({ shipment }) => shipment);
  const dispatch = useDispatch();

  const handleOnChangeProviderName = (providerId: string) => () => {
    dispatch(setProvider(providerId));
  };

  const handleChangesPricesRange = (_prices: Array<number>) => {
    dispatch(setPrices(_prices));
  };

  const handleChangesDaysRange = (_days: Array<number>) => {
    dispatch(setDays(_days));
  };

  const bestOptionsLabel = useCallback(
    (id: string) => {
      const label =
        bestOption.better === id
          ? "Mejor opción ⚡💸"
          : bestOption.cheaper === id
          ? "Más Barata 💸"
          : bestOption.faster === id
          ? "Más Rápida ⚡"
          : "";
      if (label) return <Chip variant={"success"}>{label}</Chip>;
      return null;
    },
    [bestOption]
  );

  const OPTIONS_FILTER = useMemo(() => {
    const priceFilter = options?.filter(
      ({ attributes }) =>
        Number(attributes?.total_pricing) >= prices[0] &&
        Number(attributes?.total_pricing) <= prices[1]
    );
    const daysFilter = priceFilter?.filter(
      ({ attributes }) =>
        Number(attributes?.days) >= days[0] &&
        Number(attributes?.days) <= days[1]
    );

    return daysFilter;
  }, [options, days, prices]);

  if (!options) return null;

  return (
    <Fragment>
      <Text variant="subtitle">Paqueteria</Text>
      <RangeContainerStyled>
        <SliderRange
          label="Precios"
          values={prices}
          onChange={handleChangesPricesRange}
          step={PRICE_STEP}
          min={0}
          max={maxRanges.price}
        />
        <SliderRange
          label="Dias"
          values={days}
          onChange={handleChangesDaysRange}
          step={DAYS_STEP}
          min={0}
          max={maxRanges.day}
        />
      </RangeContainerStyled>
      <GridCardContainer>
        {OPTIONS_FILTER?.map(({ id, attributes }) => (
          <div key={id}>
            <CardProvider
              onClick={handleOnChangeProviderName(id as string)}
              selected={currentProvider?.id === id}
              title={attributes?.provider as string}
              subtitle={attributes?.service_level_name as string}
              pricing={attributes?.total_pricing as string}
              days={attributes?.days as number}
            >
              {bestOptionsLabel(id as string)}
            </CardProvider>
          </div>
        ))}
      </GridCardContainer>
    </Fragment>
  );
};

export default ProviderItems;
