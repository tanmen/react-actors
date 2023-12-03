import styled from "@emotion/styled";
import {FC, useEffect, useState} from "react";
import {SkeletonLoading} from "../../loadings";
import {StyleProps} from "../../types";

export interface ImageProps extends StyleProps {
  src: string;
  width: string | number;
  height: string | number;
  alt?: string;
  empty?: string;
}

export const Image: FC<ImageProps> = ({src, alt, empty, width, height, className, style}) => {
  const [error, setError] = useState(false);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    setError(false);
    setLoad(true);
  }, [src]);

  return <Box width={width} height={height} className={className} style={style}>
    {load ? <SkeletonLoading style={{
      width: typeof width === 'number' ? `${width}px` : width,
      height: typeof height === 'number' ? `${height}px` : height
    }}/> : null}
    <Img
      className="react-actors-img"
      load={load}
      width={width}
      height={height}
      src={src && !error ? src : empty}
      onLoad={() => setLoad(false)}
      onError={() => {
        setError(true);
        setLoad(false);
      }}
      alt={alt}
    />
  </Box>;
};

const Box = styled.div<{ width: string | number, height: string | number; }>`
  width: ${({width}) => typeof width === 'number' ? `${width}px` : width};
  height: ${({height}) => typeof height === 'number' ? `${height}px` : height};
`;

const Img = styled.img<{ load: boolean }>`
  display: ${({load}) => load ? 'none' : 'block'};
`;

