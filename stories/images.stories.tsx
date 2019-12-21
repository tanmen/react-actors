import {text} from "@storybook/addon-knobs";
import {storiesOf} from '@storybook/react';
import * as React from "react";
import {CenterDisposition} from "../src/dispositions";
import {Image, RoundImage} from "../src/images";

storiesOf('Images', module)
  .add('RoundImage', () =>
    <CenterDisposition style={{height: '100vh'}}>
      <RoundImage
        style={{width: '150px'}}
        src={text('src', "https://placehold.jp/150x150.png")}
      />
    </CenterDisposition>
  )
  .add('Image', () =>
    <CenterDisposition style={{height: '100vh'}}>
      <Image
        width={150}
        height={150}
        src={text('src', "https://example.com/test")}
        empty={text('empty', "https://placehold.jp/150x150.png?text=EmptyImage")}
      />
    </CenterDisposition>
  );
