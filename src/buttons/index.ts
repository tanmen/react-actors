import {MouseEvent} from "react";
import {ColorType} from "../types/ColorType";
import {SizeType} from "../types/SizeType";
import {StyleProps} from "../types/StyleProps";

export {default as AsyncButton} from "./AsyncButton";
export {default as Button} from "./Button";

export type ButtonProps = {
  type?: 'submit' | 'reset' | 'button';
  disabled?: boolean;
  /**
   * Button Size
   */
  size?: SizeType;
  /**
   * Button Color
   */
  color?: ColorType;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => any;
} & StyleProps;
