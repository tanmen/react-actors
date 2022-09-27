import {Story} from '@storybook/react';
import React from 'react';
import {Table, TableProps} from './Table';

export default {
  title: 'Tables/Table',
  component: Table
};

type Data = {
  id: number
  firstName: string
  lastName: string
  twitterId: string
}

export const Default: Story<TableProps<Data>> = (args) => <Table {...args}/>;
Default.args = {
  columns: [{
    Header: 'ID',
    accessor: 'id'
  }, {
    Header: 'First Name',
    accessor: 'firstName'
  }, {
    Header: 'Last Name',
    accessor: 'lastName'
  }, {
    Header: 'Twitter ID',
    accessor: 'twitterId'
  }],
  data: [
    {id: 1, firstName: 'Mark', lastName: 'Otto', twitterId: '@mdo'},
    {id: 2, firstName: 'Jacob', lastName: 'Thornton', twitterId: '@fat'},
    {id: 3, firstName: 'Larry', lastName: 'the Bard', twitterId: '@twitter'}
  ]
}

export const CellClick: Story<TableProps<Data>> = (args) => <Table {...args}/>;
CellClick.args = {
  columns: [{
    Header: 'ID',
    accessor: 'id'
  }, {
    Header: 'First Name',
    accessor: 'firstName'
  }, {
    Header: 'Last Name',
    accessor: 'lastName'
  }, {
    Header: 'Twitter ID',
    accessor: 'twitterId',
    onClick: ({value}) => console.log(value),
  }],
  data: [
    {id: 1, firstName: 'Mark', lastName: 'Otto', twitterId: '@mdo'},
    {id: 2, firstName: 'Jacob', lastName: 'Thornton', twitterId: '@fat'},
    {id: 3, firstName: 'Larry', lastName: 'the Bard', twitterId: '@twitter'}
  ]
}
