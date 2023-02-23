import styled from "@emotion/styled";
import React, {FC, MouseEvent, ReactNode} from "react";
import {useMode} from "../../hooks";
import {ModeType} from "../../types";

type Align = 'right' | 'left' | 'center';
type Column<T extends DataModel, K extends keyof T = keyof T> = {
  Header: ReactNode,
  accessor: K,
  align: Align
  Wrapper?: FC<{ data: T, accessor: K, align: Align, value: T[K], children: ReactNode }>
  onClick?: (props: { data: T, accessor: K, value: T[K] }, event: MouseEvent) => Promise<any> | any
}
type DataModel = { [key: string]: ReactNode };
export type TableProps<T extends DataModel> = {
  columns: Column<T>[],
  data: T[],
  className?: string,
  onClick?: (value: T, event: MouseEvent) => Promise<any> | any
}

export const Table =
  <T extends DataModel>({columns, data, className, onClick}: TableProps<T>): ReturnType<FC<TableProps<T>>> => {
    const mode = useMode();
    return <STable className={className}>
      <thead>
      <tr>
        {columns.map(({Header, accessor}) => <Th key={accessor.toString()} mode={mode}>{Header}</Th>)}
      </tr>
      </thead>
      <tbody>
      {data.map((row, index) =>
        <Tr key={index} className={onClick ? 'clickable' : ''} onClick={onClick ? (e) => onClick(row, e) : undefined}>
          {columns.map(({Wrapper, accessor, align = 'left', onClick: onCellClick}) =>
            <Td key={[index, accessor].join('-')} mode={mode} align={align} className={onCellClick ? 'clickable' : ''}
                onClick={onCellClick ? (e) => onCellClick({data: row, accessor, value: row[accessor]}, e) : undefined}>
              {Wrapper ? <Wrapper data={row} accessor={accessor} align={align} value={row[accessor]}>
                {row[accessor]}
              </Wrapper> : <>{row[accessor]}</>}
            </Td>)}
        </Tr>)}
      </tbody>
    </STable>;
  };

const STable = styled.table`
  border-collapse: collapse;
`;

const Tr = styled.tr`
  &.clickable:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, .1);
  }
`;

const Td = styled.td<{ mode: ModeType, align: Align }>`
  padding: .5rem;
  text-align: ${({align}) => align};

  tbody > tr:not(:last-of-type) > & {
    border-bottom: 1px solid ${({mode}) => mode === 'light' ? '#dee2e6' : '#464b4f'};
  }

  thead > tr > & {
    border-bottom: 1px solid ${({mode}) => mode === 'light' ? '#212529' : '#fff'};
    text-align: left;
  }

  &.clickable:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, .1);
  }
`;

const Th = styled(Td.withComponent('th'))`
  text-align: match-parent;
`;
