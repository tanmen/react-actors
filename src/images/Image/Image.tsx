import {css} from "@emotion/react";
import styled from "@emotion/styled";
import {FC, useEffect, useRef, useState} from "react";
import {SkeletonLoading} from "../../loadings/SkeletonLoading";
import {StyleProps} from "../../types";

export interface ImageProps extends StyleProps {
  src: string　| null;
  width: string | number;
  height: string | number;
  alt?: string;
  empty?: string;
}

export const Image: FC<ImageProps> = ({src, alt, empty, width, height, className, style}) => {
  const [error, setError] = useState(false);
  const [load, setLoad] = useState(true);
  const ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    setError(false);
    setLoad(true);
  }, [src]);

  useEffect(() => {
    if (ref.current?.complete) setLoad(false)
  }, [])

  return <Box width={width} height={height} className={className} style={style}>
    {load ? <SkeletonLoading style={{
      width: typeof width === 'number' ? `${width}px` : width,
      height: typeof height === 'number' ? `${height}px` : height
    }}/> : null}
    <Img
      ref={ref}
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

const Img = styled.img<{ load: boolean, width: string | number; height: string| number }>`
  display: ${({load}) => load ? 'none' : 'block'};
  ${({width}) => typeof width === 'string' && css`
    width: ${width};
  `};
  ${({height}) => typeof height === 'string' && css`
    height: ${height};
  `};
`;

