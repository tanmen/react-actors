import React, {FC, useState} from "react";
import styled from "styled-components";
import {SkeletonLoading} from "../loadings";
import {StyleProps} from "../types/StyleProps";

interface Props extends StyleProps {
  src: string;
  alt?: string;
  empty?: string;
  width?: string | number;
  height?: string | number;
}

const Image: FC<Props> = ({src, alt, empty, width, height, className, style}) => {
  const [error, setError] = useState(false);
  const [load, setLoad] = useState(true);
  return <Box width={width} height={height} className={className} style={style}>
    {load ? <SkeletonLoading style={{width: typeof width === 'number' ? `${width}px` : width,
      height: typeof height === 'number' ? `${height}px` : height}}/> : null}
    <Img
      className="img"
      load={load}
      width={width}
      height={height}
      src={!error ? src : empty}
      onLoadCapture={() => setLoad(true)}
      onLoad={() => setLoad(false)}
      onError={() => {
        setError(true);
        setLoad(false);
      }}
      alt={alt}
    />
  </Box>
};

export default Image;

const Box = styled.div<{ width?: string | number, height?: string | number; }>`
width: ${({width = 'auto'}) => typeof width === 'number' ? `${width}px` : width};
height: ${({height = 'auto'}) => typeof height === 'number' ? `${height}px` : height};
`;

const Img = styled.img<{ load: boolean }>`
display: ${({load}) => load ? 'none' : 'block'};
`;

