import styled from "@emotion/styled";
import {createContext, FC, ReactNode, useState} from "react";
import {Modal, ModalProps} from "../../modals/Modal";

export const ModalContext = createContext({
  show: (_props: Omit<ModalProps, 'onClose'> | null) => {},
});

export type ModalProviderProps = {
  modal?: FC<ModalProps>
  children: ReactNode
}

export const ModalProvider: FC<ModalProviderProps> = ({modal: Element = Modal, children}) => {
  const [props, setProps] = useState<Omit<ModalProps, 'onClose'> | null>(null);
  return <ModalContext.Provider value={{show: (props: Omit<ModalProps, 'onClose'> | null) => setProps(props)}}>
    {children}
    {props && <div>
      <ModalContent onClick={() => setProps(null)}>
        <div onClick={e => e.stopPropagation()}>
          <Element {...props} onClose={() => setProps(null)}/>
        </div>
      </ModalContent>
      <Background/>
    </div>}
  </ModalContext.Provider>;
};

const ModalContent = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000010;
`

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: .5;
  background-color: #000;
  z-index: 1000000;
`
