import {MouseEvent} from "react";

export {default as AsyncButton} from "./AsyncButton";
export {default as Button} from "./Button";

export interface BaseProps extends ComponentProps {
  disabled?: boolean
  onClick: (event: MouseEvent<HTMLButtonElement>) => any
}
