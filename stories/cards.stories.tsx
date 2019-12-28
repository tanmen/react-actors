import {select, text} from "@storybook/addon-knobs";
import {storiesOf} from '@storybook/react';
import * as React from "react";
import {ImageCard} from "../src/cards";
import BasicCard from "../src/cards/BasicCard";


storiesOf('Cards', module)
  .add('BasicCard', () => {
    const imageValue = {
      src: "https://placehold.jp/150x150.png",
      alt: "test"
    };
    const options = {
      '1': Array(1).fill(imageValue),
      '2': Array(2).fill(imageValue),
      '3': Array(3).fill(imageValue),
      '4': Array(4).fill(imageValue),
      '5': Array(5).fill(imageValue),
      '6': Array(6).fill(imageValue),
      '7': Array(7).fill(imageValue),
      '8': Array(8).fill(imageValue),
      '9': Array(9).fill(imageValue),
      '10': Array(10).fill(imageValue)
    };
    return <BasicCard
      icon={{src: "https://placehold.jp/150x150.png"}}
      name={text('name', 'Name', 'header')}
      info={text('info', '5分前', 'header')}
      images={
        select<any>('images', options, Array(9).fill(imageValue))
      }
      text={text('text', 'text')}
    />
  })
  .add('ImageCard', () =>
    <ImageCard width={150} height={250} src="https://placehold.jp/150x250.png" text={text('text', 'Text')}/>);
