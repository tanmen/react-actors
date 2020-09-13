import {InterpolationWithTheme} from "@emotion/core";
import {ThemeProvider as StyledThemeProvider} from "emotion-theming";
import React, {FC} from "react";
import {GlobalCss} from "../styles/GlobalCss";

interface Mode {
  light: ThemeColor;
  dark: ThemeColor;
}

interface ThemeColor {
  font: string;
  border: string;
  background: string;
}

interface Type {
  primary: ThemeColor;
  secondary: ThemeColor;
  success: ThemeColor;
  danger: ThemeColor;
  warning: ThemeColor;
  info: ThemeColor;
}

export interface Theme {
  mode: Mode;
  type: Type;
}

export const INITIAL_THEME: Theme = {
  mode: {
    light: {
      font: '#212529',
      background: '#fff',
      border: '#ced4da'
    },
    dark: {
      font: '#fff',
      background: '#343a40',
      border: '#343a40'
    }
  },
  type: {
    primary: {
      font: '#fff',
      border: '#007bff',
      background: '#007bff'
    },
    secondary: {
      font: '#fff',
      border: '#6c757d',
      background: '#6c757d'
    },
    success: {
      font: '#fff',
      border: '#28a745',
      background: '#28a745'
    },
    danger: {
      font: '#fff',
      border: '#dc3545',
      background: '#dc3545'
    },
    warning: {
      font: '#212529',
      border: '#ffc107',
      background: '#ffc107'
    },
    info: {
      font: '#fff',
      border: '#17a2b8',
      background: '#17a2b8'
    }
  }
};

const ThemeProvider: FC<{ theme?: Theme; global?: InterpolationWithTheme<any> }> = ({theme = INITIAL_THEME, global, children}) =>
  <StyledThemeProvider theme={theme}>
    <GlobalCss styles={global}/>
    {children}
  </StyledThemeProvider>;

export default ThemeProvider;
