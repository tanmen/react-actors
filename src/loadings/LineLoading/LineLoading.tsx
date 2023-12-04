import {keyframes} from "@emotion/react";
import styled from "@emotion/styled";
import {FC} from "react";
import {useMode} from "../../hooks/useMode";
import {ModeType, StyleProps} from "../../types";

export const LineLoading: FC<StyleProps> = ({className, style}) => {
  const mode = useMode();
  return <Box className={className} style={style}>
    {[...Array(3)].map((_, index) => <Line key={index} mode={mode} delay={0.32 - index * 0.16}/>)}
  </Box>;
}

const animation = keyframes`
  0%,
  80%,
  100% {
    height: .6em;
  }
  40% {
    height: 1em;
  }
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  height: 1em;
  width: 1em;

  & > div + div {
    margin-left: .2em;
  }
`

const Line = styled.div<{ delay: number, mode: ModeType }>`
  width: .2em;
  height: .75em;
  background-color: ${({mode}) => mode === 'dark' ? '#fff' : '#aaa'};
  animation: ${animation} 1s ease-in-out infinite;
  animation-delay: -${({delay}) => delay}s;
`;
