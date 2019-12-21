import Color from 'color-js/color';
import React, {FC} from "react";
import styled, {css} from "styled-components";
import color from "../themes/color";
import {ButtonProps, ColorType, SizeType} from "./index";

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
  color: {
    primary: css`
      color: #fff;
      background-color: #007bff;
      border-color: #007bff;
      &:focus {
        background-color: ${Color('#007bff').darkenByRatio(0.2).toCSS()};
        border-color: ${Color('#007bff').darkenByRatio(0.2).toCSS()};
        box-shadow: 0 0 0 0.2rem ${Color('#007bff').lightenByRatio(0.2).setAlpha(0.5).toCSS()};
      }
    `,
    secondary: css`
      color: #fff;
      background-color: #6c757d;
      border-color: #6c757d;
      &:focus {
        background-color: ${Color('#6c757d').darkenByRatio(0.2).toCSS()};
        border-color: ${Color('#6c757d').darkenByRatio(0.2).toCSS()};
        box-shadow: 0 0 0 0.2rem ${Color('#6c757d').lightenByRatio(0.2).setAlpha(0.5).toCSS()};
      }
    `,
    success: css`
      color: #fff;
      background-color: #28a745;
      border-color: #28a745;
      &:focus {
        color: #fff;
        background-color: #218838;
        border-color: #1e7e34;
        box-shadow: 0 0 0 0.2rem rgba(72,180,97,.5);
      }
    `,
  }
};
const StyledButton = styled.button<{ size: SizeType, colorType: ColorType }>`
color: ${color.default.primary.font.hex};
padding: .375rem .75rem;
border: 1px solid ${color.default.primary.border.hex};
border-radius: .25rem;
font-weight: 400;
transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
&:disabled {
  opacity: .6;
  cursor: not-allowed;
}
&:focus {
  outline: 0 #fff;
  box-shadow: 0 0 0 0.2rem rgba(0,123,255,.25);
}
${({size}) => size === SizeType.Small && Css.size.small}
${({size}) => size === SizeType.Large && Css.size.large}
${({colorType}) => colorType === ColorType.Primary && Css.color.primary}
${({colorType}) => colorType === ColorType.Secondary && Css.color.secondary}
${({colorType}) => colorType === ColorType.Success && Css.color.success}
`;
