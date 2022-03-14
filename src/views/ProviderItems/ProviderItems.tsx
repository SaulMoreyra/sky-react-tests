import { CardProvider, Chip, SliderRange, Text } from "components";
import React, { Fragment, useCallback, useMemo, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProvider } from "redux/actions/shipmentAction";
import { ShipmentState } from "redux/reducers/shipmentReducer";
import { RootState } from "redux/store";
import {
  GridCardContainer,
  RangeContainerStyled,
} from "./ProviderItems.styled";

const ProviderItems = () => {
  const { options, currentProvider, bestOption, currentLabel } = useSelector<
    RootState,
    ShipmentState
  >(({ shipment }) => shipment);
  const dispatch = useDispatch();
  const guideRef = useRef<HTMLAnchorElement>();

  const [price, setPrice] = useState([0, 2000]);
  const [days, setDays] = useState([0, 30]);

  const handleOnChangeProviderName = (providerId: string) => () => {
    dispatch(setProvider(providerId));
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
        Number(attributes?.total_pricing) > price[0] &&
        Number(attributes?.total_pricing) < price[1]
    );
    const daysFilter = priceFilter?.filter(
      ({ attributes }) =>
        Number(attributes?.days) > days[0] && Number(attributes?.days) < days[1]
    );

    return daysFilter;
  }, [options, days, price]);

  if (!options) return null;

  return (
    <Fragment>
      <Text variant="subtitle">Paqueteria</Text>
      <RangeContainerStyled>
        <SliderRange
          label="Precios"
          values={price}
          onChange={setPrice}
          step={100}
          min={0}
          max={2000}
        />
        <SliderRange
          label="Dias"
          values={days}
          onChange={setDays}
          step={1}
          min={0}
          max={30}
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
