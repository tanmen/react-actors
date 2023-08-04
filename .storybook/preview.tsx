import type { Preview } from "@storybook/react";
import React from "react";
import {ThemeProvider} from "../src";
import 'ress/dist/ress.min.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  argTypes: {
    mode: {
      control: {
        type: 'radio',
        options: ['light', 'dark']
      }
    }
  },
  args: {
    mode: 'light'
  },
  decorators: [(Story, {mode}) => <ThemeProvider mode={mode}>
    <Story/>
    </ThemeProvider>]
};

export default preview;
