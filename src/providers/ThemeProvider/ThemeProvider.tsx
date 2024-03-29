import {GlobalProps, ThemeProvider as StyledThemeProvider} from "@emotion/react";
import {createContext, FC, ReactNode} from "react";
import {GlobalCss} from "../../styles";
import {ColorType, ModeType} from "../../types";

export const ThemeContext = createContext<ModeType>('light');

export type ThemeProp = {
  font: string;
  border: string;
  background: string;
};

export type ThemeColor = {
  [key in ModeType]: ThemeProp;
};

export type Theme = {
  [key in ColorType]: ThemeColor;
};

export const INITIAL_THEME: Theme = {
  normal: {
    dark: {
      font: '#aaa',
      background: '#202020',
      border: '#404040'
    },
    light: {
      font: '#212529',
      background: '#fff',
      border: '#ced4da'
    }
  },
  primary: {
    dark: {
      font: '#fff',
      border: '#007bff',
      background: '#007bff'
    },
    light: {
      font: '#fff',
      border: '#007bff',
      background: '#007bff'
    }
  },
  secondary: {
    dark: {
      font: '#f8f9fa',
      border: '#404040',
      background: '#303030'
    },
    light: {
      font: '#495057',
      border: '#ced4da',
      background: '#e9ecef'
    }
  },
  moderate: {
    dark: {
      font: '#f8f9fa',
      border: '#606060',
      background: '#404040'
    },
    light: {
      font: '#495057',
      border: '#D5DADF',
      background: '#ECEEF1'
    }
  },
  success: {
    dark: {
      font: '#fff',
      border: '#28a745',
      background: '#28a745'
    },
    light: {
      font: '#fff',
      border: '#28a745',
      background: '#28a745'
    }
  },
  danger: {
    dark: {
      font: '#fff',
      border: '#dc3545',
      background: '#dc3545'
    },
    light: {
      font: '#fff',
      border: '#dc3545',
      background: '#dc3545'
    }
  },
  warning: {
    dark: {
      font: '#212529',
      border: '#ffc107',
      background: '#ffc107'
    },
    light: {
      font: '#212529',
      border: '#ffc107',
      background: '#ffc107'
    }
  },
  info: {
    dark: {
      font: '#fff',
      border: '#17a2b8',
      background: '#17a2b8'
    },
    light: {
      font: '#fff',
      border: '#17a2b8',
      background: '#17a2b8'
    }
  }
};

export const ThemeProvider: FC<{
  theme?: Theme;
  global?: GlobalProps['styles'];
  mode?: ModeType,
  children: ReactNode
}> =
  ({theme = INITIAL_THEME, global, mode = 'light', children}) =>
    <StyledThemeProvider theme={theme}>
      <ThemeContext.Provider value={mode}>
        <GlobalCss styles={global}/>
        {children}
      </ThemeContext.Provider>
    </StyledThemeProvider>;
