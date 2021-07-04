import styled from "@emotion/styled";
import React, {FC, ReactNode} from "react";
import {Button} from "../buttons";
import {useTheme} from "../hooks";
import {ThemeProp} from "../providers";
import {handleEvent} from "../utils/handleEvent";
import {Modal} from "./Modal";

export type ConfirmModalProps = {
  title?: ReactNode;
  text: ReactNode;
  onOK: () => unknown;
  onClose: () => unknown;
}

export const ConfirmModal: FC<ConfirmModalProps> = ({title, text, onOK,onClose}) => {
  const theme = useTheme('normal')
  return <Modal onClose={onClose}>
    {title && <Title theme={theme}>{title}</Title>}
    <Content>
      {text}
      <Buttons>
        <Button color="secondary" size="small" onClick={handleEvent(onClose)}>Cancel</Button>
        <Button size="small" onClick={handleEvent(onOK)}>OK</Button>
      </Buttons>
    </Content>
  </Modal>;
};

const Title = styled.header<{ theme: ThemeProp; }>`
  font-size: 1.5rem;
  border-bottom: 1px solid ${({theme: {border}}) => border};
  padding: .5rem;
`
const Content = styled.div`
  width: 400px;
  padding: .5rem;
`

const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: .5rem;
  margin-top: .5rem;
`;
