import {css} from "@emotion/core";
import styled from "@emotion/styled";
import Color from "color-js";
import React, {FC, MouseEvent, useState} from "react";
import {LineLoading} from "../loadings";
import {Theme} from "../providers/ThemeProvider";
import {ColorStyles} from "../types/ColorStyles";
import {ColorType} from "../types/ColorType";
import {SizeStyles} from "../types/SizeStyles";
import {SizeType} from "../types/SizeType";
import {extractColorStyle} from "../utils/extractors/extractColorStyle";
import {extractSizeStyle} from "../utils/extractors/extractSizeStyle";

type ButtonProps = {
  type?: 'submit' | 'reset' | 'button';
  disabled?: boolean;
  size?: SizeType;
  color?: ColorType;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => Promise<any> | any;
};
export const Button: FC<ButtonProps> = ({children, color = 'primary', size = 'normal', disabled, type = 'button', onClick}) => {
  const [loading, setLoading] = useState(false);
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    if (!onClick) {
      return;
    }
    const reaction = onClick(event);
    if (reaction instanceof Promise) {
      setLoading(true);
      reaction.finally(() => setLoading(false));
    }
  };
  return <Style color={color} sizeType={size} type={type} disabled={disabled} onClick={handleClick}>
    <Box>
      {loading && <Loading/>}
      <Content disabled={loading}>{children}</Content>
    </Box>
  </Style>;
};

const styles: SizeStyles = {
  normal: css`
    padding: .375rem .75rem;
    border-radius: .25rem;
      `,
  small: css`
    padding: .25rem .5rem;
    font-size: .875rem;
    line-height: 1.5;
    border-radius: .2rem;`,
  large: css`
    padding: .5rem 1rem;
    font-size: 1.25rem;
    line-height: 1.5;
    border-radius: .3rem;`
};

const colors: ColorStyles = ({color, theme}: { color: keyof Theme['type'], theme: Theme }) => css`
color: ${theme.type[color].font};
background-color: ${theme.type[color].background};
border-color: ${theme.type[color].border};
&:focus {
  background-color: ${Color(theme.type[color].background).darkenByRatio(0.2).toCSS()};
  border-color: ${Color(theme.type[color].border).darkenByRatio(0.2).toCSS()};
  box-shadow: 0 0 0 0.2rem ${Color(theme.type[color].border).lightenByRatio(0.2).setAlpha(0.5).toCSS()};
}
& * {
  color: ${theme.type[color].font};
}
`;

const Style = styled.button<{ sizeType: SizeType, color: ColorType, theme: Theme }>(css`
font-weight: 700;
transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
&:disabled {
  opacity: .6;
  cursor: not-allowed;
}
&:focus {
  outline: 0 #fff;
  box-shadow: 0 0 0 0.2rem rgba(0,123,255,.25);
}`,
  extractSizeStyle(styles),
  extractColorStyle(colors));

const Box = styled.div`
position: relative;
`;

const Loading = styled(LineLoading)`
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
margin: auto;
font-size: 1.25em;
`;

const Content = styled.p<{ disabled?: boolean; }>`
opacity: ${({disabled}) => disabled ? 0 : 1};
transition: opacity .15s ease-in-out;
`;
