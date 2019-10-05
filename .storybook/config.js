import {addDecorator, configure} from '@storybook/react';
import {withKnobs} from "@storybook/addon-knobs";
import {setConsoleOptions} from "@storybook/addon-console";
import "../src/css/reset.css";

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.stories\.tsx?$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

setConsoleOptions({
  panelExclude: []
});

addDecorator(withKnobs);

configure(loadStories, module);
