import React from "react";
import {storiesOf} from "@storybook/react";
import Input from "../src/inputs/Input";
import InputGroup, {Prepend, PrependText} from "../src/inputs/InputGroup";
import Layout from "../src/layouts/Layout";

storiesOf('Examples', module)
  .add('InputPage', () => <Layout header={<div>test</div>}>
    <label htmlFor="version">Current version</label>
    <InputGroup>
      <Input type="number"/>
      <Prepend>
        <PrependText>.</PrependText>
      </Prepend>
      <Input type="number"/>
      <Prepend>
        <PrependText>.</PrependText>
      </Prepend>
      <Input type="number"/>
    </InputGroup>
  </Layout>);
