import styled from "@emotion/styled";
import React from "react";
import {ReactScreenshotTest} from "react-screenshot-test";
import {ThemeProvider} from "../../providers";
import {Image} from "./Image";

const Center = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

ReactScreenshotTest.create('Image')
  .viewport('Component', {width: 100, height: 100})
  .shoot('Normal', <ThemeProvider>
    <Center>
      <Image src="https://placehold.jp/150x150.png"
             width={150}
             height={150}
             empty="https://placehold.jp/150x150.png?text=EmptyImage"/>
    </Center>
  </ThemeProvider>)
  .run();

