import styled from "@emotion/styled";
import React, {FC} from "react";
import {useTheme} from "../hooks";
import {ThemeProp} from "../providers";
import {ModalBackground} from "./ModalBackground";

export type ModalProps = {
  onClose: () => {}
}

export const Modal: FC<ModalProps> = ({children, onClose}) => {
  const theme = useTheme('normal');
  return <ModalBackground onClose={onClose}>
    <Content theme={theme}>
      {children}
    </Content>
  </ModalBackground>;
};

const Content = styled.div<{ theme: ThemeProp; }>`
  border-radius: .25rem;
  background-color: ${({theme: {background}}) => background};
  color: ${({theme: {font}}) => font};
`;
