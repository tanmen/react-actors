import {text} from "@storybook/addon-knobs";
import {storiesOf} from '@storybook/react';
import * as React from "react";
import {RoundImage} from "../src/images";

storiesOf('Images', module)
  .add('RoundImage', () =>
    <RoundImage src={text('src', "https://placehold.jp/150x150.png")}/>);
