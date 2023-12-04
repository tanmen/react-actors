import {useContext} from "react";
import {ThemeContext} from "../providers/ThemeProvider";

export const useMode = () =>
  useContext(ThemeContext)
