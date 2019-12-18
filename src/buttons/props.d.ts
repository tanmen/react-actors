import {MouseEvent} from "react";
import {StyleProps} from "../types/StyleProps";

type ButtonProps = {
  disabled?: boolean
  onClick: (event: MouseEvent<HTMLButtonElement>) => any
} & StyleProps;
