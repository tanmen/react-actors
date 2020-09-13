import {SizeStyles} from "../../types/SizeStyles";
import {SizeType} from "../../types/SizeType";

export const extractSizeStyle = (styles: SizeStyles) =>
  ({sizeType}: { sizeType: SizeType }) => styles[sizeType];
