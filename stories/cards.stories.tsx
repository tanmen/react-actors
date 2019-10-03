import {storiesOf} from '@storybook/react';
import * as React from "react";
import BasicCard from "../src/cards/BasicCard";


storiesOf('Cards', module)
  .add('BasicCard', () => <BasicCard
    icon={{src: "https://placehold.jp/150x150.png"}}
    name="test"
    images={[{
      src: "https://placehold.jp/150x150.png",
      alt: "test"
    }, {
      src: "https://placehold.jp/150x150.png",
      alt: "test"
    }, {
      src: "https://placehold.jp/150x150.png",
      alt: "test"
    }, {
      src: "https://placehold.jp/150x150.png",
      alt: "test"
    }, {
      src: "https://placehold.jp/150x150.png",
      alt: "test"
    }, {
      src: "https://placehold.jp/150x150.png",
      alt: "test"
    }]} text="test"/>);
