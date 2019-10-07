import React, {FC} from "react";
import styled from "styled-components";
import SquareDisposition from "../dispositions/SquareDisposition";
import {ComponentProps} from "../../types/ComponentProps";

interface Props extends ComponentProps {
  borderWidth?: number;
}

const CircleLoading: FC<Props> = ({borderWidth = 3, className, style}) =>
  <SquareDisposition className={className} style={style}>
    <Circle borderWidth={borderWidth}/>
  </SquareDisposition>;

export default CircleLoading;

const Circle = styled.div<{ borderWidth: number }>`
position: relative;
border-top: ${({borderWidth}) => borderWidth}px solid rgba(0,0,0, 0.2);
border-right: ${({borderWidth}) => borderWidth}px solid rgba(0,0,0, 0.2);
border-bottom: ${({borderWidth}) => borderWidth}px solid #000;
border-left: ${({borderWidth}) => borderWidth}px solid rgba(0,0,0, 0.2);
transform: translateZ(0);
animation: circle-load 0.5s infinite linear;

&,
&:after {
  border-radius: 50%;
  width: 100%;
  height: 100%;
}
@keyframes circle-load {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
`;
