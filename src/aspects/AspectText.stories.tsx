import styled from "@emotion/styled";
import {Story} from "@storybook/react";
import React from "react";
import {AspectText, AspectTextProps} from "./AspectText";

export default {
  title: 'AspectText',
  component: AspectText
};

export const Default: Story<AspectTextProps & {children?: string}> = (args) => <div style={{height: '50vh'}}>
  <AspectText {...args}/>
</div>;
Default.args = {
  children: 'Text'
}

export const Styled: Story<AspectTextProps & {children?: string}> = (args) => <div style={{height: '50vh'}}>
  <StyledAspectText {...args}/>
</div>;
Styled.args = {
  ratio: 50,
  children: 'Text'
}

const StyledAspectText = styled(AspectText)`
  border: 10px solid #000066;
  padding: 50px 0;
`
