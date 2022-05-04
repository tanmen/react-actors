import {Story} from '@storybook/react';
import React from 'react';
import {Table, TableProps} from './Table';

export default {
  title: 'Tables/Table',
  component: Table
};

export const Default: Story<TableProps> = (args) => <Table {...args}/>;
Default.args = {
  heads: ['#', 'First', 'Last', 'Handle'],
  data: [
    [{head: true, value: '1'},	'Mark',	'Otto',	'@mdo'],
    [{head: true, value: '2'},	'Jacob',	'Thornton',	'@fat'],
    [{head: true, value: '3'},	'Larry',	'the Bird',	'@twitter'],
  ]
}
