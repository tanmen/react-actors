import {keyframes} from "@emotion/core";
import styled from "@emotion/styled";
import React, {FC} from "react";
import {StyleProps} from "../types/StyleProps";

export const SkeletonLoading: FC<StyleProps> = (props) =>
  <Skeleton {...props}/>;


const animation = keyframes`
  0% {transform: translateX(-100%)}
  100% {transform: translateX(100%)}
`;

const Skeleton = styled.div`
width: 100%;
height: 100%;
background: #d9d9d9;
position: relative;
overflow: hidden;
&::before {
  content: '';
  display: block;
  height: 100%;
  width: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent);
  position: absolute;
  top: 0;
  left: 0;
  animation: ${animation} 1.2s linear infinite;
}
`;
