import {useTheme as useEmotionTheme} from '@emotion/react';
import {useContext} from "react";
import {Theme, ThemeContext, ThemeProp} from "../providers/ThemeProvider";
import {ColorType} from "../types/ColorType";

export const useTheme = (type: ColorType): ThemeProp => {
  const mode = useContext(ThemeContext);
  const theme = useEmotionTheme() as Theme;
  return theme[type][mode];
};
