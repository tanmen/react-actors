import {css} from "@emotion/react";
import styled from "@emotion/styled";
import classnames from "classnames";
import Color from "color-js/color";
import {DetailedHTMLProps, FC, ForwardedRef, forwardRef, InputHTMLAttributes} from "react";
import {useMode} from "../../hooks";
import {useTheme} from "../../hooks/useTheme";
import {ThemeProp} from "../../providers/ThemeProvider";
import {ModeType, SizeType} from "../../types";
import {extractSizeStyle} from "../../utils/extractSizeStyle";
import {classnameItem} from "../InputGroup";
import {inputStyles} from "../styles";

export type InputProps = Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'size'> & {
  ref?: ForwardedRef<HTMLInputElement>;
  size?: SizeType;
  error?: boolean;
}

export const Input: FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(
  ({className, size = 'normal', error, ...props}, ref) => {
    const mode = useMode();
    const theme = useTheme('normal');
    const errorTheme = useTheme('danger');
    return <SInput
      {...props}
      mode={mode}
      error={error}
      className={classnames('actors-input', classnameItem, className)}
      ref={ref}
      sizeType={size}
      theme={theme}
      errorTheme={errorTheme}
    />;
  });

const SInput = styled.input<{
  mode: ModeType;
  sizeType: SizeType;
  theme: ThemeProp;
  errorTheme: ThemeProp;
  error?: boolean
}>(
  ({mode, theme: {font, background, border}, errorTheme, error}) => css`
    display: block;
    width: 100%;
    font-weight: 400;
    line-height: 1.5;
    color: ${font};
    color-scheme: ${mode};
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
  `, extractSizeStyle(inputStyles));
