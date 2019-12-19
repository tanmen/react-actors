import {MouseEvent} from "react";
import {StyleProps} from "../types/StyleProps";

export {default as AsyncButton} from "./AsyncButton";
export {default as Button} from "./Button";

export type ButtonProps = {
  type?: 'submit' | 'reset' | 'button';
  disabled?: boolean;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => any;
} & StyleProps;
