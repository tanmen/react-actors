import styled from "@emotion/styled";
import React from "react";
import {ReactScreenshotTest} from "react-screenshot-test";
import ThemeProvider from "../providers/ThemeProvider";
import {Button} from "./Button";

const Center = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
`

ReactScreenshotTest.create('Button')
  .viewport('Component', {width: 100, height: 100})
  .shoot('Small', <ThemeProvider>
    <Center>
      <Button size="small">
        Button
      </Button>
    </Center>
  </ThemeProvider>)
  .shoot('Normal', <ThemeProvider>
    <Center>
      <Button>
        Button
      </Button>
    </Center>
  </ThemeProvider>)
  .shoot('Large', <ThemeProvider>
    <Center>
      <Button size="large">
        Button
      </Button>
    </Center>
  </ThemeProvider>)
  .run();

