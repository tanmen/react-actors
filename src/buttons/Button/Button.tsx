import {css} from "@emotion/react";
import styled from "@emotion/styled";
import Color from "color-js";
import {ButtonHTMLAttributes, FC, MouseEvent, ReactNode, useEffect, useState} from "react";
import {useTheme} from "../../hooks/useTheme";
import {LineLoading} from "../../loadings/LineLoading";
import {ThemeProp} from "../../providers/ThemeProvider";
import {ColorType, SizeStyles, SizeType} from "../../types";
import {extractSizeStyle} from "../../utils/extractSizeStyle";

type CustomProps = {
  children?: ReactNode,
  type?: 'submit' | 'reset' | 'button';
  disabled?: boolean;
  loading?: boolean;
  size?: SizeType;
  color?: ColorType;
  className?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => Promise<any> | any;
}

export type ButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof CustomProps> & CustomProps;
export const Button: FC<ButtonProps> =
  ({
     children,
     loading,
     color = 'primary',
     size = 'normal',
     disabled,
     type = 'button',
     className,
     onClick,
     ...props
   }) => {
    const theme = useTheme(color);
    const [_loading, setLoading] = useState(false);
    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
      if (!onClick) {
        return;
      }
      const reaction = onClick(event);
      if (reaction instanceof Promise && loading === undefined) {
        setLoading(true);
        reaction.finally(() => setLoading(false));
      }
    };

    useEffect(() => {
      setLoading(loading || false);
    }, [loading]);

    return <Style
      className={className}
      theme={theme}
      sizeType={size}
      type={type}
      disabled={disabled}
      onClick={handleClick}
      {...props}
    >
      <Box>
        {_loading && <Loading/>}
        <Content disabled={_loading}>{children}</Content>
      </Box>
    </Style>;
  };

const styles: SizeStyles = {
  normal: css`
    padding: .375rem .75rem;
    border-radius: .25rem;
  `,
  small: css`
    padding: .25rem .5rem;
    font-size: .875rem;
    line-height: 1.5;
    border-radius: .2rem;`,
  large: css`
    padding: .5rem 1rem;
    font-size: 1.25rem;
    line-height: 1.5;
    border-radius: .3rem;`
};

const Style = styled.button<{ sizeType: SizeType, theme: ThemeProp; }>(({theme: {font, background, border}}) => css`
  color: ${font};
  background-color: ${background};
  border-color: ${border};
  font-weight: 700;
  word-break: keep-all;
  transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;

  &:disabled {
    opacity: .6;
    cursor: not-allowed;
  }

  &:focus {
    outline: 0 #fff;
    background-color: ${Color(background).darkenByRatio(0.2).toCSS()};
    border-color: ${Color(border).darkenByRatio(0.2).toCSS()};
    box-shadow: 0 0 0 0.2rem ${Color(border).lightenByRatio(0.2).setAlpha(0.5).toCSS()};
  }`, extractSizeStyle(styles));

const Box = styled.div`
  position: relative;
`;

const Loading = styled(LineLoading)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  font-size: 1.25em;
`;

const Content = styled.p<{ disabled?: boolean; }>`
  opacity: ${({disabled}) => disabled ? 0 : 1};
  transition: opacity .15s ease-in-out;
`;
