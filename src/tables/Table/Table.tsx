import styled from "@emotion/styled";
import React, {FC} from "react";

type Data = string | { head: boolean, value: string };

export type TableProps = {
  heads: string[],
  data: Data[][]
}

export const Table: FC<TableProps> = ({heads, data}) => <STable>
  <thead>
    <tr>
      {heads.map(head => <Th key={head}>{head}</Th>)}
    </tr>
  </thead>
  <tbody>
    {data.map((row, index) => <tr key={index}>
      {row.map(v => typeof v === 'string'
        ? <Td key={v}>{v}</Td>
        : v.head
          ? <Th key={v.value}>{v.value}</Th>
          : <Td key={v.value}>{v.value}</Td>)}
    </tr>)}
  </tbody>
</STable>;

const STable = styled.table`
  border-collapse: collapse;
`;

const Td = styled.td`
  padding: 0.5rem;
  border-bottom: 1px solid #dee2e6;
  thead > tr > & {
    border-bottom: 1px solid #282c34;
    text-align: left;
  }
`;

const Th = styled(Td.withComponent('th'))`
  text-align: match-parent;
`;
