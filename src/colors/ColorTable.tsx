import styled from "@emotion/styled";
import Color from 'color-js/color';
import React, {FC, useState} from "react";

export interface ColorProps {
  base: string;
}

export const ColorTable: FC<ColorProps> = ({base}) => {
  const [ratio, setRatio] = useState(0.5);
  return <>
    <input type="number" defaultValue={0.5} min={0} max={1} step={0.1} onChange={(e) => setRatio(Number(e.target.value))}/>
    <div>Dark: <C color={Color(base).darkenByRatio(ratio).toCSS()}/></div>
    <div>Light: <C color={Color(base).lightenByRatio(ratio).toCSS()}/></div>
    <div>Value: <C color={Color(base).valueByRatio(ratio).toCSS()}/></div>
    <div>Desaturate: <C color={Color(base).desaturateByRatio(ratio).toCSS()}/></div>
    <div>Devalue: <C color={Color(base).devalueByRatio(ratio).toCSS()}/></div>
    <div>Saturate: <C color={Color(base).saturateByRatio(ratio).toCSS()}/></div>
  </>;
};

const C = styled.div<{ color: string }>`
height: 10px;
width: 10px;
background-color: ${({color}) => color};
`;
