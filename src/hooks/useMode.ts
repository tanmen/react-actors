import {useContext} from "react";
import {ThemeContext} from "../providers";

export const useMode = () =>
  useContext(ThemeContext)
