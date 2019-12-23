import Color from "color-js/color";
import React, {FC, InputHTMLAttributes} from "react";
import styled from "styled-components";
import {ColorType} from "../types/ColorType";
import {ModeType} from "../types/ModeType";
import {validate} from "../utils/validater";

interface Original {
  color?: ColorType;
  mode?: ModeType;
}

type Props = Original & InputHTMLAttributes<HTMLInputElement>;

const Input: FC<Props> = ({
                            color = ColorType.Primary,
                            mode = ModeType.Light,
                            ...props
                          }) =>
  <SInput {...props} color={color} mode={mode}/>;

export default Input;

const SInput = styled.input<{ color: ColorType, mode: ModeType }>`
display: block;
width: 100%;
height: calc(1.5em + .75rem + 2px);
padding: .375rem .75rem;
font-size: 1rem;
font-weight: 400;
line-height: 1.5;
color: ${validate<Required<Original>>((theme, {mode}) => theme.mode[mode].font)};
background-color: ${validate<Required<Original>>((theme, {mode}) => theme.mode[mode].background)};
background-clip: padding-box;
border: 1px solid ${validate<Required<Original>>((theme, {mode}) => theme.mode[mode].border)};
border-radius: .25rem;
transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
&:focus {
  outline: 0;
  border-color: ${validate<Required<Original>>((theme, {color}) => 
    Color(theme.type[color].border).setLightness(0.75).toCSS())};
  box-shadow: 0 0 0 .2rem ${validate<Required<Original>>((theme, {color}) =>
    Color(theme.type[color].border).setAlpha(0.25).toCSS())};
}
`;
