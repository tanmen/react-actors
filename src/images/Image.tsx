import React, {FC, useState} from "react";
import styled from "styled-components";
import {ComponentProps} from "../../types/ComponentProps";
import {CircleLoading} from "../loadings";

interface Props extends ComponentProps {
  src: string;
  alt?: string;
  empty?: string;
}

const Image: FC<Props> = ({src, alt, empty, className, style}) => {
  const [error, setError] = useState(false);
  const [load, setLoad] = useState(true);
  return <div className={className} style={style}>
    {load ? <CircleLoading/> : null}
    <Img
      className="img"
      load={load}
      src={!error ? src : empty}
      onLoadCapture={() => setLoad(true)}
      onLoad={() => setLoad(false)}
      onError={() => {
        setError(true);
        setLoad(false);
      }}
      alt={alt}
    />
  </div>
};

export default Image;

const Img = styled.img<{ load: boolean }>`
display: ${({load}) => load ? 'none' : 'block'};
`;

