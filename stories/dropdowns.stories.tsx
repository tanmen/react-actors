import {action} from "@storybook/addon-actions";
import {text} from "@storybook/addon-knobs";
import {storiesOf} from '@storybook/react';
import React from "react";
import SearchBox from "../src/dropdowns/SearchBox";
import ThemeProvider from "../src/providers/ThemeProvider";

storiesOf('Dropdowns', module)
  .add('Search', () => {
    const data = [
      {text: 'test'},
      {text: 'test2'},
      {text: 'test3'}
      ];
    return <ThemeProvider>
      <SearchBox value={text('value', '')} data={data} onSelect={action('onSelect')}/>
    </ThemeProvider>;
  });
