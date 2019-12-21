import {addDecorator, addParameters, configure} from '@storybook/react';
import {withKnobs} from "@storybook/addon-knobs";
import {withInfo} from '@storybook/addon-info';
import {setConsoleOptions} from "@storybook/addon-console";
import "@storybook/addon-console";

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.stories\.tsx?$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addParameters({
  options: {
    panelPosition: 'right'
  }
});

setConsoleOptions({
  panelExclude: []
});

addDecorator(withKnobs);
addDecorator(withInfo);

configure(loadStories, module);
