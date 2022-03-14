import { Backdrop, Header, Toast } from "components";
import { ColorVariant } from "interfaces/Color";
import { ProviderProps } from "interfaces/Provider";
import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearMessage } from "redux/actions/uiActions";
import { UiState } from "redux/reducers/uiReducer";
import { RootState } from "redux/store";

const UiProvider = ({ children }: ProviderProps) => {
  const { loading, message } = useSelector<RootState, UiState>(({ ui }) => ui);
  const dispatch = useDispatch();

  const handleOnClose = () => {
    dispatch(clearMessage());
  };

  return (
    <Fragment>
      <Header />
      <Backdrop open={loading} />
      <Toast
        variant={message?.variant as ColorVariant}
        delay={3000}
        open={Boolean(message)}
        onClose={handleOnClose}
      >
        {message?.text}
      </Toast>
      {children}
    </Fragment>
  );
};

export default UiProvider;
