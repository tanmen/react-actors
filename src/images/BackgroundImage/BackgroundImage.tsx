import styled from "@emotion/styled";
import {FC, ReactNode, useEffect, useState} from "react";
import {SkeletonLoading} from "../../loadings";
import {StyleProps} from "../../types";

export interface BackgroundImageProps extends StyleProps {
  src: string;
  empty?: string;
  children?: ReactNode;
}

export const BackgroundImage: FC<BackgroundImageProps> = ({src, empty, className, style, children}) => {
  const [error, setError] = useState(false);
  const [load, setLoad] = useState<boolean>()
  const [_src, setSrc] = useState<string | null>(null);

  useEffect(() => {
    setError(false);
    setLoad(true);
  }, [src]);

  useEffect(() => {
    const img = new Image()
    img.src = src
    img.onload = () => {
      setLoad(false);
      setSrc(src);
    };
    img.onerror = () => {
      setError(true);
      setLoad(false);
    }
  }, [src])

  return <Box
    className={className}
    style={style}
    src={_src && !error ? _src : empty}>
    {load ? <SkeletonLoading style={{
      position: "absolute",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }}/> : null}
    {children}
  </Box>;
};

const Box = styled.div<{ src?: string }>`
  position: relative;
  background-image: url("${({src}) => src}");
`;

