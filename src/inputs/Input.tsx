import {css} from "@emotion/react";
import styled from "@emotion/styled";
import classnames from "classnames";
import React, {FC, forwardRef, InputHTMLAttributes} from "react";
import {useTheme} from "../hooks";
import {ThemeProp} from "../providers";
import {SizeType} from "../types/SizeType";
import {extractSizeStyle} from "../utils/extractors/extractSizeStyle";
import {classname} from "./InputGroup";
import Color from "color-js/color";
import {inputStyles} from "./styles";

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: SizeType;
  error?: boolean;
}

export const Input: FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(({className, size = 'normal',error, ...props}, ref) => {
  const theme = useTheme('normal');
  const errorTheme = useTheme('danger');
  return <SInput {...props} error={error} className={classnames('actors-input', className)} ref={ref} sizeType={size} theme={theme} errorTheme={errorTheme}/>;
});

const SInput = styled.input<{ sizeType: SizeType; theme: ThemeProp; errorTheme: ThemeProp; error?: boolean }>(({theme: {font, background, border}, errorTheme, error}) => css`
display: block;
width: 100%;
font-weight: 400;
line-height: 1.5;
color: ${font};
background-color: ${background};
background-clip: padding-box;
border: 1px solid ${error ? errorTheme.border : border};
transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
&:focus {
  outline: 0;
  border-color: ${error ? errorTheme.border : border};
  box-shadow: 0 0 0 .2rem ${Color(error ? errorTheme.border : border).setAlpha(0.5).toCSS()};
}
&:disabled {
  background-color: ${error ? errorTheme.border : border};
  cursor: not-allowed;
}
.${classname} > &:not(:first-child) {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.${classname} > &:not(:last-child) {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}`, extractSizeStyle(inputStyles));
