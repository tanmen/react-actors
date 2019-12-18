import React, {FC, MouseEvent, useCallback, useEffect, useRef, useState} from "react";
import styled from "styled-components";
import {CircleLoading} from "../loadings";
import {Button, ButtonProps} from "./index";

const AsyncButton: FC<ButtonProps> = (props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [clicked, setClick] = useState(false);
  const [size, setSize] = useState(0);
  const handleOnClick = useCallback((e: MouseEvent<HTMLButtonElement>) => Promise.resolve(setClick(true))
    .then(() => props.onClick(e))
    .catch((err) => {
      console.error(err);
      setClick(false);
    })
    .then(() => setClick(false)), [props.onClick, setClick]);

  useEffect(() => {
    setSize(ref.current ? ref.current.clientHeight : 0);
  }, [ref]);

  return <Button onClick={handleOnClick} disabled={props.disabled || clicked}>
    <Content>
      <Body disabled={clicked}>{props.children}</Body>
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
const LoadingBox = styled.div<{size: number}>`
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
width: ${({size}) => size !== 0 ? `${size}px`: 'auto'};
height: ${({size}) => size !== 0 ? `${size}px`: 'auto'};
margin: 0 auto;
`;

