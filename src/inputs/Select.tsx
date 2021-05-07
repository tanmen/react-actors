import {css} from "@emotion/react";
import styled from "@emotion/styled";
import classnames from "classnames";
import Color from "color-js";
import React, {FC, InputHTMLAttributes, Ref} from "react";
import {useTheme} from "../hooks";
import {ThemeProp} from "../providers";
import {SizeType} from "../types/SizeType";
import {extractSizeStyle} from "../utils/extractors/extractSizeStyle";
import {classname} from "./InputGroup";
import {inputStyles} from "./styles";

export interface SelectProps extends Omit<InputHTMLAttributes<HTMLSelectElement>, 'size'> {
  size?: SizeType;
  /**
   * ref
   */
  register?: Ref<HTMLSelectElement>;
}

export const Select: FC<SelectProps> =
  ({className, size = 'normal', register, children, ...props}) => {
    const theme = useTheme('normal');
    return <SSelect {...props} className={classnames('actors-input', className)} ref={register} sizeType={size}
                    theme={theme}>
      {children}
    </SSelect>;
  };

const SSelect = styled.select<{ sizeType: SizeType; theme: ThemeProp; }>(({theme: {font, background, border}}) => css`
  display: block;
  width: 100%;
  font-weight: 400;
  color: ${font};
  background-color: ${background};
  background-clip: padding-box;
  border: 1px solid ${border};
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

  .${classname} > &:not(:first-child) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  .${classname} > &:not(:last-child) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }`, extractSizeStyle(inputStyles));
