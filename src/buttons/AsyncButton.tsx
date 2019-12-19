import React, {FC, MouseEvent, useCallback, useEffect, useRef, useState} from "react";
import styled from "styled-components";
import {CircleLoading} from "../loadings";
import {Button, ButtonProps} from "./index";

interface Props extends ButtonProps{
  loading?: boolean;
}

const AsyncButton: FC<Props> = ({loading, type,  onClick = () => {}, disabled, children, style, className}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [clicked, setClick] = useState(loading || false);
  const [size, setSize] = useState(0);
  const handleOnClick = useCallback((e: MouseEvent<HTMLButtonElement>) => Promise.resolve(setClick(true))
    .then(() => onClick(e))
    .catch((err) => {
      console.error(err);
      setClick(false);
    })
    .then(() => setClick(false)), [onClick, setClick]);

  useEffect(() => {
    setSize(ref.current ? ref.current.clientHeight : 0);
  }, [ref]);
  useEffect(() => {
    setClick(loading || false);
  }, [loading]);

  return <Button type={type} onClick={handleOnClick} disabled={disabled || clicked} style={style} className={className}>
    <Content>
      <Body disabled={clicked}>{children}</Body>
      <LoadingBox ref={ref} size={size}>
        {clicked ? <CircleLoading/> : null}
      </LoadingBox>
    </Content>
  </Button>
};

export default AsyncButton;

const Content = styled.div`
position: relative;
`;
const Body = styled.p<{ disabled: boolean }>`
opacity: ${({disabled}) => disabled ? 0 : 1};
`;
const LoadingBox = styled.div<{ size: number }>`
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
width: ${({size}) => size !== 0 ? `${size}px` : 'auto'};
height: ${({size}) => size !== 0 ? `${size}px` : 'auto'};
margin: 0 auto;
`;

