import {CSSProperties} from "react";

export type StyleProps<T extends object = {}> =  {
  className?: string;
  style?: CSSProperties;
} & T;
