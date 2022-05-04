import styled from "@emotion/styled";
import classnames from 'classnames';
import React, {FC, ReactNode} from "react";
import {useTheme} from "../../hooks";
import {ThemeProp} from "../../providers";
import {StyleProps} from "../../types";
import Color from "color-js/color";

export const classname = 'actors-input-group';

export interface InputGroupProps extends StyleProps {
  error?: boolean;
  children?: ReactNode;
}

export const InputGroup: FC<InputGroupProps> = ({className, style, error, children}) => {
  const theme = useTheme('danger');
  return <Group className={classnames([className, classname, {error}])} theme={theme} style={style}>{children}</Group>;
};

const Group = styled.div<{ theme: ThemeProp }>`
width: 100%;
display: flex;
border-radius: .25rem;
&.error {
  box-shadow: 0 0 0 .2rem ${({theme: {border}}) => Color(border).setAlpha(0.75).toCSS()};
}
`;
