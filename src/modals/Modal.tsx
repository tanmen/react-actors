import styled from "@emotion/styled";
import React, {FC, SyntheticEvent} from "react";
import {useTheme} from "../hooks";
import {ThemeProp} from "../providers";
import {handleEvent} from "../utils/handleEvent";
import {ModalBackground} from "./ModalBackground";

export type ModalProps = {
  /**
   * Whether to continue to force visible
   */
  force?: boolean
  onClose: (event: SyntheticEvent) => unknown
}

export const Modal: FC<ModalProps> = ({force, children, onClose}) => {
  const theme = useTheme('normal');
  return <ModalBackground onClose={(e) => !force && onClose(e)}>
    <Content theme={theme} onClick={handleEvent()}>
      {children}
    </Content>
  </ModalBackground>;
};

const Content = styled.div<{ theme: ThemeProp; }>`
  border-radius: .25rem;
  background-color: ${({theme: {background}}) => background};
  color: ${({theme: {font}}) => font};
  z-index: 1000001;
`;
