import {keyframes} from "@emotion/core";
import styled from "@emotion/styled";
import React, {FC} from "react";
import {StyleProps} from "../types/StyleProps";

export const CircleLoading: FC<StyleProps> = ({className, style}) =>
  <RingBox className={className} style={style}>
    {[...Array(4)].map(((_, index) => <Ring key={index} delay={-0.45 + index * 0.15}/>))}
  </RingBox>;

const animation = keyframes`
0% {
    transform: rotate(0deg);
}
100% {
  transform: rotate(360deg);
}
`;

const RingBox = styled.div`
display: inline-block;
position: relative;
width: 1em;
height: 1em;
`;

const Ring = styled.div<{delay: number}>`
box-sizing: border-box;
display: block;
position: absolute;
width: .8em;
height: .8em;
margin: .1em;
border: .1em solid;
border-radius: 50%;
animation: ${animation} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
border-color: #fff transparent transparent transparent;
animation-delay: ${({delay}) => delay}s;
`;

