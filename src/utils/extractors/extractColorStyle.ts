import {SerializedStyles} from "@emotion/core";
import {Theme} from "../../providers/ThemeProvider";
import {ColorStyles} from "../../types/ColorStyles";
import {ColorType} from "../../types/ColorType";

export const extractColorStyle = (styles: ColorStyles) =>
  (props: { color: ColorType, theme: Theme }): SerializedStyles => {
    if (!props.theme) {
      throw new Error("Not found ThemeProvider. please set.");
    }
    return styles(props);
  };
