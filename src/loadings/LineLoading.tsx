import React, {FC} from "react";
import styled from "styled-components";
import {ComponentProps} from "../../types/ComponentProps";
import SquareDisposition from "../dispositions/SquareDisposition";

const LineLoading: FC<ComponentProps> = ({className, style}) => <SquareDisposition className={className} style={style}>
  <Spinner>
    <Rect className="rect-1"/>
    <Rect className="rect-2"/>
    <Rect className="rect-3"/>
    <Rect className="rect-4"/>
    <Rect className="rect-5"/>
  </Spinner>
</SquareDisposition>;
export default LineLoading;

const Spinner = styled.div`
width:100%;
height: 100%;
text-align: center;
`;
const Rect = styled.div`
background-color: #333;
height: 100%;
width: 10%;
display: inline-block;

animation: square-load 1.2s infinite ease-in-out;

& + & {
  margin-left: 10%;
}

&.rect-2 {
  animation-delay: -1.1s;
}
&.rect-3 {
  animation-delay: -1.0s;
}
&.rect-4 {
  animation-delay: -0.9s;
}
&.rect-5 {
  animation-delay: -0.8s;
}

@keyframes square-load {
  0%, 40%, 100% { 
    transform: scaleY(0.4);
  }  20% { 
    transform: scaleY(1.0);
  }
}
`;
