import styled from "@emotion/styled";
import {ReactScreenshotTest} from "react-screenshot-test";
import {ThemeProvider} from "../../providers";
import {Modal} from "./Modal";

const Center = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

ReactScreenshotTest.create('Modal')
  .viewport('Component', {width: 100, height: 100})
  .shoot('Normal', <ThemeProvider>
    <Center>
      <Modal title="title" text="test" onClose={() => {}}/>
    </Center>
  </ThemeProvider>)
  .run();

