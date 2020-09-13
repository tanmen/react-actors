import {css} from "@emotion/core";
import styled from "@emotion/styled";
import Color from "color-js/color";
import React, {FC, InputHTMLAttributes, Ref} from "react";
import {ModeType} from "../types/ModeType";
import {SizeStyles} from "../types/SizeStyles";
import {SizeType} from "../types/SizeType";
import {extractSizeStyle} from "../utils/extractors/extractSizeStyle";
import {isLight} from "../utils/mode";
import {validate} from "../utils/validater";

interface Original {
  mode?: ModeType;
  size?: SizeType;
  /**
   * ref
   */
  register?: Ref<HTMLInputElement>;
}

type Props = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> & Original;

const Input: FC<Props> = ({
                            mode = 'light',
                            size = 'normal',
                            register,
                            ...props
                          }) =>
  <SInput {...props} ref={register} mode={mode} sizeType={size}/>;

export default Input;

const styles: SizeStyles = {
  normal: css`
      height: calc(1rem + .75rem + 2px);
      padding: .375rem .5rem;
      font-size: 1rem;
      border-radius: .25rem;
    `,
  small: css`
      height: calc(.875rem + .50rem + 2px);
      padding: .25rem .25rem;
      font-size: .875rem;
      line-height: 1.5;
      border-radius: .2rem;
    `,
  large: css`
      height: calc(1.25rem + 1rem + 2px);
      padding: .5rem .75rem;
      font-size: 1.25rem;
      line-height: 1.5;
      border-radius: .3rem;
    `,
};

const SInput = styled.input<{ mode: ModeType, sizeType: SizeType }>`
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
  border-color: ${validate<Required<Original>>((theme, {mode}) =>
  isLight(mode) ? Color(theme.mode.light.border).setLightness(0.75).toCSS()
    : Color(theme.mode.dark.border).setLightness(0.25).toCSS())};
  box-shadow: 0 0 0 .2rem ${validate<Required<Original>>((theme, {mode}) =>
  Color(theme.mode[mode].border).setAlpha(0.25).toCSS())};
}
&:disabled {
  background-color: ${validate<Required<Original>>(
  (theme, {mode}) => isLight(mode) ? Color(theme.mode.light.font).setLightness(0.9).toCSS()
    : Color(theme.mode.dark.font).setLightness(0.3).toCSS())};
  cursor: not-allowed;
}
${extractSizeStyle(styles)}
`;
