import {storiesOf} from '@storybook/react';
import * as React from "react";
import PersonCard from "../src/cards/PersonCard";


storiesOf('Common|layouts', module)
  .add('PersonCard', () => <PersonCard/>);
