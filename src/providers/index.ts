import ProviderUtils from "utils/ProviderUtils";
import ThemeProvider from "./ThemeProvider";
import UiProvider from "./UiProvider";

export default ProviderUtils.convine(ThemeProvider, UiProvider);
