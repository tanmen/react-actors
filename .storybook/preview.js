import {ThemeProvider} from "../src/providers";
import React from "react";

export const parameters = {
  actions: {argTypesRegex: "^on[A-Z].*"}
}

export const argTypes = {
  mode: {
    control: {
      type: 'radio',
      options: ['light', 'dark']
    }
  }
}

export const args = {
  mode: 'light'
}

export const decorators = [
  (Story, {args: {mode}}) => (
    <ThemeProvider mode={mode}>
      <Story/>
    </ThemeProvider>
  )
];
