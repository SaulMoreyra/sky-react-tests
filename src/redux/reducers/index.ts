import { combineReducers } from "redux";
import shipment from "./shipmentReducer";
import ui from "./uiReducer";

const rootReducer = { shipment, ui };
export default combineReducers(rootReducer);
