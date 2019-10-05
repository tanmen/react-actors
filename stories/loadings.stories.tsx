import {number} from "@storybook/addon-knobs";
import {storiesOf} from '@storybook/react';
import * as React from "react";
import SquareDisposition from "../src/dispositions/SquareDisposition";
import {CircleLoading, SpinnerLoading} from "../src/loadings";

storiesOf('Loadings', module)
  .add('SpinnerLoading', () => <SpinnerLoading/>)
  .add('CircleLoading', () => <div style={{height: '100%'}}>
    <SquareDisposition>
      <CircleLoading
        borderWidth={number('borderWidth', 5)}/>
    </SquareDisposition>
  </div>);
