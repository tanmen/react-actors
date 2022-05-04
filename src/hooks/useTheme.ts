import {useTheme as useEmotionTheme} from '@emotion/react';
import {Theme, ThemeProp} from "../providers";
import {ColorType} from "../types";
import {useMode} from "./useMode";

export const useTheme = (type: ColorType): ThemeProp => {
  const mode = useMode();
  const theme = useEmotionTheme() as Theme;
  return theme[type][mode];
};
