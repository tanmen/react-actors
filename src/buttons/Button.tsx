import Color from 'color-js/color';
import React, {FC} from "react";
import styled, {css} from "styled-components";
import {Theme} from "../providers/ThemeProvider";
import {ColorType} from "../types/ColorType";
import {SizeType} from "../types/SizeType";
import {validate} from "../utils/validater";
import {ButtonProps} from "./index";

const Button: FC<ButtonProps> = ({className, color = ColorType.Primary, size = SizeType.Normal, type = 'button', style, disabled, onClick, children}) =>
  <StyledButton
    size={size}
    colorType={color}
    className={className}
    type={type}
    style={style}
    disabled={disabled}
    onClick={onClick}
  >{children}</StyledButton>;

export default Button;

const Css = {
  size: {
    default: css`
      padding: .375rem .75rem;
      border-radius: .25rem;
    `,
    small: css`
      padding: .25rem .5rem;
      font-size: .875rem;
      line-height: 1.5;
      border-radius: .2rem;
    `,
    large: css`
      padding: .5rem 1rem;
      font-size: 1.25rem;
      line-height: 1.5;
      border-radius: .3rem;
    `,
  },
  color: (type: keyof Theme['type']) => css`
    color: ${validate((theme) => theme.type[type].font)};
    background-color: ${validate((theme) => theme.type[type].background)};
    border-color: ${validate((theme) => theme.type[type].border)};
    &:focus {
      background-color: ${validate((theme) => Color(theme.type[type].background).darkenByRatio(0.2).toCSS())};
      border-color: ${validate((theme) => Color(theme.type[type].border).darkenByRatio(0.2).toCSS())};
      box-shadow: 0 0 0 0.2rem ${validate(
    (theme) => Color(theme.type[type].border).lightenByRatio(0.2).setAlpha(0.5).toCSS())};
    }
    & * {
      color: ${validate((theme) => theme.type[type].font)};
    }
  `,
};
const StyledButton = styled.button<{ size: SizeType, colorType: ColorType }>`
font-weight: 700;
transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
&:disabled {
  opacity: .6;
  cursor: not-allowed;
}
&:focus {
  outline: 0 #fff;
  box-shadow: 0 0 0 0.2rem rgba(0,123,255,.25);
}
${({size}) => Css.size[size]}
${({colorType}) => Css.color(colorType)}
`;
