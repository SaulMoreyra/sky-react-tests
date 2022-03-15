import { useTheme } from "@emotion/react";
import { Text } from "components";
import * as React from "react";
import { Range, getTrackBackground } from "react-range";
import {
  RangeContainerStyled,
  RangeTrackChildrenStyled,
  RangeTrackStyled,
  SliderRangeContainerStyled,
  ThumbChildrenStyled,
  ThumbContainerStyled,
  ThumbSecondChildrenStyled,
} from "./SliderRange.styled";

const _STEP = 100;
const _MIN = 0;
const _MAX = 1000;

export type SliderRangeProps = {
  min: number;
  step: number;
  max: number;
  values: number[];
  onChange: (values: number[]) => void;
  label: string;
};

const SliderRange = ({
  min: MIN = _MIN,
  step: STEP = _STEP,
  max: MAX = _MAX,
  values = [_MIN, _MAX],
  onChange = (_values: number[]) => {},
  label,
}: SliderRangeProps) => {
  const theme = useTheme();
  return (
    <SliderRangeContainerStyled>
      <RangeContainerStyled>
        <Range
          values={values}
          step={STEP}
          min={MIN}
          max={MAX}
          rtl={false}
          onChange={onChange}
          renderTrack={({ props, children }) => (
            <RangeTrackStyled
              onMouseDown={props.onMouseDown}
              onTouchStart={props.onTouchStart}
              style={props.style}
            >
              <RangeTrackChildrenStyled
                ref={props.ref}
                background={getTrackBackground({
                  values,
                  colors: ["#ccc", theme.primary, "#ccc"],
                  min: MIN,
                  max: MAX,
                  rtl: false,
                })}
              >
                {children}
              </RangeTrackChildrenStyled>
            </RangeTrackStyled>
          )}
          renderThumb={({ index, props, isDragged }) => (
            <ThumbContainerStyled {...props}>
              <ThumbChildrenStyled>
                {values[index].toFixed(0)}
              </ThumbChildrenStyled>
              <ThumbSecondChildrenStyled isDragged={isDragged} />
            </ThumbContainerStyled>
          )}
        />
      </RangeContainerStyled>
      <Text variant="body" align="center">
        {label}
      </Text>
    </SliderRangeContainerStyled>
  );
};

export default SliderRange;
