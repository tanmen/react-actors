import styled from "@emotion/styled";
import React, {FC} from "react";
import {useMode} from "../../hooks";
import {ModeType} from "../../types";

type Data = string | { head: boolean, value: string };

export type TableProps = {
  heads: string[],
  data: Data[][]
}

export const Table: FC<TableProps> = ({heads, data}) => {
  const mode = useMode();
  return <STable>
    <thead>
    <tr>
      {heads.map(head => <Th key={head} mode={mode}>{head}</Th>)}
    </tr>
    </thead>
    <tbody>
    {data.map((row, index) => <tr key={index}>
      {row.map(v => typeof v === 'string'
        ? <Td key={v} mode={mode}>{v}</Td>
        : v.head
          ? <Th key={v.value} mode={mode}>{v.value}</Th>
          : <Td key={v.value} mode={mode}>{v.value}</Td>)}
    </tr>)}
    </tbody>
  </STable>;
};

const STable = styled.table`
  border-collapse: collapse;
`;

const Td = styled.td<{ mode: ModeType }>`
  padding: 0.5rem;

  tbody > tr:not(:last-of-type) > & {
    border-bottom: 1px solid ${({mode}) => mode === 'light' ? '#dee2e6' : '#373b3e'};
  }

  thead > tr > & {
    border-bottom: 1px solid ${({mode}) => mode === 'light' ? '#212529' : '#fff'};
    text-align: left;
  }
`;

const Th = styled(Td.withComponent('th'))`
  text-align: match-parent;
`;
