import {action} from "@storybook/addon-actions";
import {storiesOf} from '@storybook/react';
import React, {useState} from "react";
import SearchBox from "../src/dropdowns/SearchBox";
import ThemeProvider from "../src/providers/ThemeProvider";

storiesOf('Dropdowns/Search', module)
  .add('Simply', () => {
    const [text, setText] = useState('');
    const data = [
      {text: 'test'},
      {text: 'test2'},
      {text: 'test3'}
    ];
    return <ThemeProvider>
      <SearchBox value={text} data={data} onChange={setText} onSelect={action('onSelect')}/>
    </ThemeProvider>;
  }).add('Flex', () => {
  const data = [
    {text: 'test'},
    {text: 'test2'},
    {text: 'test3'}
  ];
  return <ThemeProvider>
    <div style={{display: 'flex'}}>
      <SearchBox data={data} onSelect={action('onSelect')}/>
      <SearchBox data={data} onSelect={action('onSelect')}/>
    </div>
  </ThemeProvider>;
});
