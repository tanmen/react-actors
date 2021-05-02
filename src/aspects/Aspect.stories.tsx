import styled from "@emotion/styled";
import {Story} from "@storybook/react";
import React from "react";
import {Aspect, AspectProps} from "./Aspect";

export default {
  title: 'Aspect',
  component: Aspect
};

export const Default: Story<AspectProps> = (args) => <StyledAspect {...args}/>;
Default.args = {
  size: '50vw'
}
const StyledAspect = styled(Aspect)`
  border: #7f7f7f;
  background-color: #676767;
`;
