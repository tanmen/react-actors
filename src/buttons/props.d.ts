import {MouseEvent} from "react";
import {StyleProps} from "../types/StyleProps";

interface ButtonProps extends StyleProps {
  disabled?: boolean
  onClick: (event: MouseEvent<HTMLButtonElement>) => any
}
