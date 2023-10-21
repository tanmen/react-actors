import {useContext} from "react";
import {ModalContext} from "../providers/ModalProvider";

export const useModal = () => useContext(ModalContext);
