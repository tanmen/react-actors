import {css} from "@emotion/core";
import styled from "@emotion/styled";
import classnames from "classnames";
import React, {FC} from "react";
import {useTheme} from "../hooks/useTheme";
import {ThemeProp} from "../providers/ThemeProvider";
import {SizeType} from "../types/SizeType";
import {StyleProps} from "../types/StyleProps";
import {extractSizeStyle} from "../utils/extractors/extractSizeStyle";
import {styles} from "./Input";
import {classname} from "./InputGroup";

export type Props = {
  size?: SizeType;
} & StyleProps;

export const InputAddition: FC<Props> = ({size = 'normal', className, style, children}) => {
  const theme = useTheme('secondary');
  return <Style sizeType={size} className={classnames('actors-input', className)} style={style} theme={theme}>{children}</Style>;
};

const Style = styled.div<{ sizeType: SizeType, theme: ThemeProp }>(({theme: {font, background, border}}) => css`
display: flex;
justify-content: center;
align-items: center;
font-weight: 400;
line-height: 1.5;
color: ${font};
white-space: nowrap;
background-color: ${background};
border: 1px solid ${border};
.${classname} > &:not(:first-child) {
  margin-left: -1px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.${classname} > &:not(:last-child) {
  margin-right: -1px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
`, extractSizeStyle(styles));

