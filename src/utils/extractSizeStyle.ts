import {SizeStyles, SizeType} from "../types";

export const extractSizeStyle = (styles: SizeStyles) =>
  ({sizeType}: { sizeType: SizeType }) => styles[sizeType];
