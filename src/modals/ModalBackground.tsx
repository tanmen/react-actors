import styled from "@emotion/styled";
import {disableBodyScroll, enableBodyScroll} from "body-scroll-lock";
import React, {FC, SyntheticEvent, useEffect} from "react";

export type ModalBackgroundProps = {
  className?: string
  onClose: (event: SyntheticEvent) => unknown
}

export const ModalBackground: FC<ModalBackgroundProps> = ({children, className, onClose}) => {
  useEffect(() => {
    const body = document.querySelector('body');
    body && disableBodyScroll(body);
    return () => {
      body && enableBodyScroll(body);
    };
  });

  return <Background className={className} onClick={onClose}>
    {children}
  </Background>;
};

const Background = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.9);
`
