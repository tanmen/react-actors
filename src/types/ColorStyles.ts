import {SerializedStyles} from "@emotion/serialize";
import {Theme} from "../providers/ThemeProvider";
import {ColorType} from "./ColorType";

export type ColorStyles = (props: { color: ColorType, theme: Theme }) => SerializedStyles;
