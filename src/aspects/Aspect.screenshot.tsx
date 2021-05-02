import styled from "@emotion/styled";
import React from "react";
import {ReactScreenshotTest} from "react-screenshot-test";
import {ThemeProvider} from "../providers";
import {Aspect} from "./Aspect";

const Center = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
`

const StyledAspect = styled(Aspect)`
  border: #7f7f7f;
  background-color: #676767;
`;

ReactScreenshotTest.create('Aspect')
  .viewport('Component', {width: 100, height: 100})
  .shoot('Small', <ThemeProvider>
    <Center>
      <StyledAspect size="20%">
        Aspect
      </StyledAspect>
    </Center>
  </ThemeProvider>)
  .shoot('Normal', <ThemeProvider>
    <Center>
      <StyledAspect>
        Aspect
      </StyledAspect>
    </Center>
  </ThemeProvider>)
  .shoot('60%', <ThemeProvider>
    <Center>
      <StyledAspect size="60%">
        Aspect
      </StyledAspect>
    </Center>
  </ThemeProvider>)
  .run();

