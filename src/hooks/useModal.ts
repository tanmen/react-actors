import {useContext} from "react";
import {ModalContext} from "../providers";

export const useModal = () => useContext(ModalContext);
