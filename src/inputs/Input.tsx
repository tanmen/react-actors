import Color from "color-js/color";
import React, {FC, InputHTMLAttributes, Ref} from "react";
import styled, {css} from "styled-components";
import {ColorType} from "../types/ColorType";
import {ModeType} from "../types/ModeType";
import {SizeType} from "../types/SizeType";
import {validate} from "../utils/validater";

interface Original {
  color?: ColorType;
  mode?: ModeType;
  size?: SizeType;
  /**
   * ref
   */
  register?: Ref<HTMLInputElement>;
}

type Props = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> & Original;

const Input: FC<Props> = ({
                            color = ColorType.Primary,
                            mode = ModeType.Light,
                            size = SizeType.Normal,
                            register,
                            ...props
                          }) =>
  <SInput {...props} ref={register} color={color} mode={mode} sizeType={size}/>;

export default Input;

const Css = {
  size: {
    default: css`
      height: calc(1.5em + .75rem + 2px);
      padding: .375rem .75rem;
      font-size: 1rem;
      border-radius: .25rem;
    `,
    small: css`
      height: calc(1.3125em + .50rem + 2px);
      padding: .25rem .5rem;
      font-size: .875rem;
      line-height: 1.5;
      border-radius: .2rem;
    `,
    large: css`
      height: calc(1.875em + .50rem + 2px);
      padding: .5rem 1rem;
      font-size: 1.25rem;
      line-height: 1.5;
      border-radius: .3rem;
    `,
  }
};

const SInput = styled.input<{ color: ColorType, mode: ModeType, sizeType: SizeType }>`
display: block;
width: 100%;
font-weight: 400;
line-height: 1.5;
color: ${validate<Required<Original>>((theme, {mode}) => theme.mode[mode].font)};
background-color: ${validate<Required<Original>>((theme, {mode}) => theme.mode[mode].background)};
background-clip: padding-box;
border: 1px solid ${validate<Required<Original>>((theme, {mode}) => theme.mode[mode].border)};
transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
&:focus {
  outline: 0;
  border-color: ${validate<Required<Original>>((theme, {color}) =>
  Color(theme.type[color].border).setLightness(0.75).toCSS())};
  box-shadow: 0 0 0 .2rem ${validate<Required<Original>>((theme, {color}) =>
  Color(theme.type[color].border).setAlpha(0.25).toCSS())};
}
${({sizeType}) => Css.size[sizeType]}
`;
