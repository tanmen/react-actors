import {css} from "@emotion/react";
import styled from "@emotion/styled";
import Color from "color-js";
import {DetailedHTMLProps, FC, ForwardedRef, forwardRef, TextareaHTMLAttributes} from "react";
import {useTheme} from "../../hooks/useTheme";
import {ThemeProp} from "../../providers/ThemeProvider";
import {SizeStyles, SizeType} from "../../types";
import {extractSizeStyle} from "../../utils/extractSizeStyle";

export type TextareaProps =
  Omit<DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>, 'size'> & {
  ref?: ForwardedRef<HTMLTextAreaElement>;
  size?: SizeType;
  error?: boolean;
};

export const Textarea: FC<TextareaProps> = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({rows = 3, size = "normal", error, ...props}, ref) => {
    const theme = useTheme('normal');
    const errorTheme = useTheme('danger');
    return <StyledTextarea
      rows={rows}
      sizeType={size}
      error={error}
      theme={theme}
      errorTheme={errorTheme}
      ref={ref} {...props}/>;
  });

const styles: SizeStyles = {
  normal: css`
    padding: .375rem .5rem;
    font-size: 1rem;
    border-radius: .25rem;
  `,
  small: css`
    padding: .25rem .25rem;
    font-size: .875rem;
    line-height: 1.5;
    border-radius: .2rem;
  `,
  large: css`
    padding: .5rem .75rem;
    font-size: 1.25rem;
    line-height: 1.5;
    border-radius: .3rem;
  `,
};

const StyledTextarea = styled.textarea<{ sizeType: SizeType; error?: boolean; theme: ThemeProp; errorTheme: ThemeProp; }>(
  ({theme: {font, background, border}, errorTheme, error}) => css`
    display: block;
    width: 100%;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    color: ${font};
    background-color: ${background};
    background-clip: padding-box;
    border: 1px solid ${error ? errorTheme.border : border};
    border-radius: .25rem;
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
  `, extractSizeStyle(styles));
