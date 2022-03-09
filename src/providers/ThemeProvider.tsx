import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import DefaultTheme from "theme/DefaultTheme";
import { ProviderProps } from "interfaces/Provider";

const ThemeProvider = ({ children }: ProviderProps) => {
  return (
    <EmotionThemeProvider theme={DefaultTheme}>{children}</EmotionThemeProvider>
  );
};

export default ThemeProvider;
