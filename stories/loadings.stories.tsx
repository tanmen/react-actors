import {number} from "@storybook/addon-knobs";
import {storiesOf} from '@storybook/react';
import * as React from "react";
import {CenterDisposition} from "../src/dispositions";
import {CircleLoading, LineLoading} from "../src/loadings";

storiesOf('Loadings', module)
  .add('LineLoading', () =>
    <CenterDisposition style={{height: '100vh'}}>
      <LineLoading style={{width: '100px'}}/>
    </CenterDisposition>)
  .add('CircleLoading', () =>
    <CenterDisposition style={{height: '100vh'}}>
      <CircleLoading
        style={{width: '100px'}}
        borderWidth={number('borderWidth', 5)}/>
    </CenterDisposition>
  );
