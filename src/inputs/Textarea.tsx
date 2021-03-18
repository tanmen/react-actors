import {css} from "@emotion/core";
import styled from "@emotion/styled";
import Color from "color-js";
import React, {FC, Ref, TextareaHTMLAttributes} from "react";
import {useTheme} from "../hooks/useTheme";
import {ThemeProp} from "../providers/ThemeProvider";
import {SizeStyles} from "../types/SizeStyles";
import {SizeType} from "../types/SizeType";
import {extractSizeStyle} from "../utils/extractors/extractSizeStyle";

export type TextareaProps = {
  size?: SizeType;
  /**
   * ref
   */
  register?: Ref<HTMLInputElement>;
} & Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'>

export const Textarea: FC<TextareaProps> = ({rows = 3, size = "normal", ...props}) => {
  const theme = useTheme('normal');
  return <StyledTextarea rows={rows} sizeType={size} theme={theme} {...props}/>;
};

const styles: SizeStyles = {
  normal: css`
    padding: .375rem .5rem;
    font-size: 1rem;
    border-radius: .25rem;
  `,
  small: css`
    padding: .25rem .25rem;
    font-size: .875rem;
    line-height: 1.5;
    border-radius: .2rem;
  `,
  large: css`
    padding: .5rem .75rem;
    font-size: 1.25rem;
    line-height: 1.5;
    border-radius: .3rem;
  `,
};

const StyledTextarea = styled.textarea<{ sizeType: SizeType; theme: ThemeProp; }>(({theme: {font, background, border}}) =>css`
  display: block;
  width: 100%;
  padding: .375rem .75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: ${font};
  background-color: ${background};
  background-clip: padding-box;
  border: 1px solid ${border};
  border-radius: .25rem;
  transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;

  &:focus {
    outline: 0;
    border-color: ${border};
    box-shadow: 0 0 0 .2rem ${Color(border).setAlpha(0.5).toCSS()};
  }
  &:disabled {
    background-color: ${border};
    cursor: not-allowed;
  }
`, extractSizeStyle(styles));
