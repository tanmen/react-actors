import {storiesOf} from '@storybook/react';
import * as React from "react";
import Input from "../src/inputs/Input";
import InputGroup, {Prepend, PrependText} from "../src/inputs/InputGroup";

storiesOf('Inputs', module)
  .add('Input', () => <Input/>);
storiesOf('Inputs/Group', module)
  .add('Doll', () => <InputGroup>
    <Prepend>
      <PrependText>$</PrependText>
    </Prepend>
    <Input type="number"/>
  </InputGroup>)
  .add('Version', () => <InputGroup>
    <Input type="number"/>
    <Prepend>
      <PrependText>.</PrependText>
    </Prepend>
    <Input type="number"/>
    <Prepend>
      <PrependText>.</PrependText>
    </Prepend>
    <Input type="number"/>
  </InputGroup>);
