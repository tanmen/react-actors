import {css} from "@emotion/react";
import styled from "@emotion/styled";
import classnames from "classnames";
import Color from "color-js";
import React, {ClassAttributes, FC, ForwardedRef, forwardRef, InputHTMLAttributes} from "react";
import {useTheme} from "../../hooks";
import {ThemeProp} from "../../providers";
import {SizeType} from "../../types";
import {extractSizeStyle} from "../../utils";
import {classname} from "../InputGroup";
import {inputStyles} from "../styles";

export type SelectProps = Omit<InputHTMLAttributes<HTMLSelectElement>, 'size'>
  & Omit<ClassAttributes<HTMLSelectElement>, 'ref'>
  & {
  ref?: ForwardedRef<HTMLSelectElement>;
  size?: SizeType;
  error?: boolean;
}

export const Select: FC<SelectProps> =
  forwardRef<HTMLSelectElement, SelectProps>(({className, size = 'normal', error, children, ...props}, ref) => {
    const theme = useTheme('normal');
    const errorTheme = useTheme('danger');
    return <SSelect
      {...props}
      className={classnames('actors-input', className)}
      ref={ref}
      sizeType={size}
      error={error}
      theme={theme}
      errorTheme={errorTheme}
    >
      {children}
    </SSelect>;
  });

const SSelect = styled.select<{ sizeType: SizeType; error?: boolean; theme: ThemeProp; errorTheme: ThemeProp; }>(
  ({theme: {font, background, border}, error, errorTheme}) => css`
    display: block;
    width: 100%;
    font-weight: 400;
    color: ${font};
    line-height: 1.5;
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
    }`, extractSizeStyle(inputStyles), css`padding-right: 1.75rem;`);
