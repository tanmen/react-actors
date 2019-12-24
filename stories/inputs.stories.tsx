import {select} from "@storybook/addon-knobs";
import {storiesOf} from '@storybook/react';
import React from "react";
import Input from "../src/inputs/Input";
import InputGroup, {Prepend, PrependText} from "../src/inputs/InputGroup";
import ThemeProvider from "../src/providers/ThemeProvider";
import {ModeType} from "../src/types/ModeType";
import {SizeType} from "../src/types/SizeType";
import {color} from "./data/color";

const mode = () => select('mode', {Light: ModeType.Light, Dark: ModeType.Dark}, ModeType.Light);
const size = () => select('size', {Normal: SizeType.Normal, Large: SizeType.Large, Small: SizeType.Small},
  SizeType.Normal);
storiesOf('Inputs', module)
  .add('Input', () => <ThemeProvider>
    <Input color={color()} mode={mode()} size={size()}/>
  </ThemeProvider>);
storiesOf('Inputs/Group', module)
  .add('Doll', () =>
    <ThemeProvider>
      <InputGroup>
        <Prepend>
          <PrependText>$</PrependText>
        </Prepend>
        <Input type="number"/>
      </InputGroup>
    </ThemeProvider>)
  .add('Version', () =>
    <ThemeProvider>
      <InputGroup>
        <Input type="number"/>
        <Prepend>
          <PrependText>.</PrependText>
        </Prepend>
        <Input type="number"/>
        <Prepend>
          <PrependText>.</PrependText>
        </Prepend>
        <Input type="number"/>
      </InputGroup>
    </ThemeProvider>);
