import styled from "@emotion/styled";
import React, {FC, ReactNode} from "react";
import {useMode} from "../../hooks";
import {ModeType} from "../../types";

type DataModel = { head: boolean, value: ReactNode };
type Data = ReactNode | DataModel;

export type TableProps = {
  heads: string[],
  data: Data[][],
  className?: string,
}

export const Table: FC<TableProps> = ({heads, data, className}) => {
  const mode = useMode();
  return <STable className={className}>
    <thead>
    <tr>
      {heads.map(head => <Th key={head} mode={mode}>{head}</Th>)}
    </tr>
    </thead>
    <tbody>
    {data.map((row, index) => <tr key={index}>
      {row.map((v, i) => isDataModel(v)
        ? v.head
          ? <Th key={[index, i].join('-')} mode={mode}>{v.value}</Th>
          : <Td key={[index, i].join('-')} mode={mode}>{v.value}</Td>
        : <Td key={[index, i].join('-')} mode={mode}>{v}</Td>)}
    </tr>)}
    </tbody>
  </STable>;
};

const isDataModel = (model: ReactNode | DataModel): model is DataModel => model !== undefined
  && model !== null
  && typeof model === 'object'
  && Object.hasOwn(model, 'head');

const STable = styled.table`
  border-collapse: collapse;
`;

const Td = styled.td<{ mode: ModeType }>`
  padding: 0.5rem;

  tbody > tr:not(:last-of-type) > & {
    border-bottom: 1px solid ${({mode}) => mode === 'light' ? '#dee2e6' : '#464b4f'};
  }

  thead > tr > & {
    border-bottom: 1px solid ${({mode}) => mode === 'light' ? '#212529' : '#fff'};
    text-align: left;
  }
`;

const Th = styled(Td.withComponent('th'))`
  text-align: match-parent;
`;
