import {SerializedStyles} from "@emotion/serialize";
import {SizeType} from "./Type";

export type SizeStyles = {
  [key in SizeType]: SerializedStyles;
};
