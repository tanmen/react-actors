import {keyframes} from "@emotion/react";
import styled from "@emotion/styled";
import {FC} from "react";
import {useMode} from "../../hooks/useMode";
import {ModeType, StyleProps} from "../../types";

export const SkeletonLoading: FC<StyleProps> = (props) => {
  const mode = useMode();
  return <Skeleton {...props} mode={mode}/>;
};

const animation = keyframes`
  0% {
    transform: translateX(-100%)
  }
  100% {
    transform: translateX(100%)
  }
`;

const Skeleton = styled.div<{ mode: ModeType }>`
  width: 100%;
  height: 100%;
  background: ${({mode}) => mode === 'dark'
          ? 'rgba(255, 255, 255, 0.13)'
          : 'rgba(0, 0, 0, 0.13)'};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    display: block;
    height: 100%;
    width: 100%;
    background: linear-gradient(90deg,
    transparent,
    ${({mode}) => mode === 'dark'
            ? 'rgba(255, 255, 255, 0.08)'
            : 'rgba(0, 0, 0, 0.08)'},
    transparent);
    position: absolute;
    top: 0;
    left: 0;
    animation: ${animation} 1.2s linear infinite;
  }
`;
