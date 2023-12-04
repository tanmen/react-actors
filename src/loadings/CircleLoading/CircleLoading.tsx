import {keyframes} from "@emotion/react";
import styled from "@emotion/styled";
import {FC} from "react";
import {useMode} from "../../hooks/useMode";
import {ModeType, StyleProps} from "../../types";

export const CircleLoading: FC<StyleProps> = ({className, style}) => {
  const mode = useMode();
  return <RingBox className={className} style={style}>
    {[...Array(4)].map(((_, index) => <Ring key={index} mode={mode} delay={-0.45 + index * 0.15}/>))}
  </RingBox>;
};

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

const Ring = styled.div<{ delay: number, mode: ModeType }>`
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: .8em;
  height: .8em;
  margin: .1em;
  border: .1em solid;
  border-radius: 50%;
  animation: ${animation} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: ${({mode}) => mode === 'dark' ? '#fff' : '#aaa'} transparent transparent transparent;
  animation-delay: ${({delay}) => delay}s;
`;

