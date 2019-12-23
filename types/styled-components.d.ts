import {Theme} from "../src/providers/ThemeProvider";

declare module "styled-components" {

  interface DefaultTheme extends Theme {
  }
}
