import {storiesOf} from '@storybook/react';
import * as React from "react";
import {Layout} from "../src/layouts";

storiesOf('Layouts', module)
  .add('Layout', () => <Layout header={<div>Header</div>} footer={<div>footer</div>}>Main</Layout>);
