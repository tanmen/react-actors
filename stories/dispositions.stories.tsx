import {storiesOf} from '@storybook/react';
import * as React from "react";
import {CenterDisposition} from "../src/dispositions";

storiesOf('Dispositions', module)
  .add('CenterDisposition', () => <CenterDisposition style={{height: '100vh'}}>
    <div style={{backgroundColor: '#000', height: '100px', width: '100px'}}/>
  </CenterDisposition>);
