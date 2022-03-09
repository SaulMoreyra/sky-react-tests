import "@emotion/react";

import DefaultTheme from "./DefaultTheme";

type ThemeLocal = typeof DefaultTheme;

declare module "@emotion/react" {
  export interface Theme extends ThemeLocal {}
}

export default DefaultTheme;
