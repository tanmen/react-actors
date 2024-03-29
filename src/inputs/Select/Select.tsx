import {css} from "@emotion/react";
import styled from "@emotion/styled";
import classnames from "classnames";
import Color from "color-js";
import {DetailedHTMLProps, FC, ForwardedRef, forwardRef, SelectHTMLAttributes} from "react";
import {useTheme} from "../../hooks/useTheme";
import {ThemeProp} from "../../providers/ThemeProvider";
import {SizeType} from "../../types";
import {extractSizeStyle} from "../../utils/extractSizeStyle";
import {classnameItem} from "../InputGroup";
import {inputStyles} from "../styles";

export type SelectProps =
  Omit<DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>, 'size'> & {
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
      className={classnames('actors-select', classnameItem, className)}
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
    }`, extractSizeStyle(inputStyles), css`padding-right: 1.75rem;`);
