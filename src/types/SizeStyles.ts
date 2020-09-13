import {SerializedStyles} from "@emotion/serialize";
import {SizeType} from "./SizeType";

export type SizeStyles = {
  [key in SizeType]: SerializedStyles;
};
