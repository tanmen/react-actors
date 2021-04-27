import {css} from "@emotion/react";
import styled from "@emotion/styled";
import classnames from "classnames";
import Color from "color-js";
import React, {FC, InputHTMLAttributes, Ref} from "react";
import {useTheme} from "../hooks/useTheme";
import {ThemeProp} from "../providers/ThemeProvider";
import {SizeStyles} from "../types/SizeStyles";
import {SizeType} from "../types/SizeType";
import {extractSizeStyle} from "../utils/extractors/extractSizeStyle";
import {classname} from "./InputGroup";

interface Props extends Omit<InputHTMLAttributes<HTMLSelectElement>, 'size'> {
  size?: SizeType;
  /**
   * ref
   */
  register?: Ref<HTMLSelectElement>;
}

export const Select: FC<Props> = ({
                             className,
                             size = 'normal',
                             register,
                             children,
                             ...props
                           }) => {
  const theme = useTheme('normal');
  return <SSelect {...props} className={classnames('actors-input', className)} ref={register} sizeType={size}
                  theme={theme}>
    {children}
  </SSelect>;
};

const styles: SizeStyles = {
  normal: css`
    height: calc(1rem + 1.25rem + 2px);
    padding: .375rem .75rem;
    font-size: 1rem;
    border-radius: .25rem;
  `,
  small: css`
    height: calc(.875rem + 1rem + 2px);
    padding: .25rem .5rem;
    font-size: .875rem;
    line-height: 1.5;
    border-radius: .2rem;
  `,
  large: css`
    height: calc(1.25rem + 1.5rem + 2px);
    padding: .5rem 1rem;
    font-size: 1.25rem;
    line-height: 1.5;
    border-radius: .3rem;
  `,
};

const SSelect = styled.select<{ sizeType: SizeType; theme: ThemeProp; }>(({theme: {font, background, border}}) => css`
  display: block;
  width: 100%;
  font-weight: 400;
  line-height: 1.5;
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
  }`, extractSizeStyle(styles));
