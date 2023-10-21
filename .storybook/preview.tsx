import type {Preview} from "@storybook/react";
import 'ress/dist/ress.min.css';
import {ThemeProvider} from "../src";

const preview: Preview = {
  parameters: {
    actions: {argTypesRegex: "^on[A-Z].*"},
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
        type: 'select',
        options: ['light', 'dark']
      }
    }
  },
  args: {
    mode: 'dark'
  },
  decorators: [(Story, {args: {mode}}) => <ThemeProvider mode={mode}>
    <Story/>
  </ThemeProvider>]
};

export default preview;
