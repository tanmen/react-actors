import styled from "@emotion/styled";
import classnames from 'classnames';
import React, {FC} from "react";
import {useTheme} from "../hooks/useTheme";
import {ThemeProp} from "../providers/ThemeProvider";
import {StyleProps} from "../types/StyleProps";
import Color from "color-js/color";

export const classname = 'actors-input-group';

export interface InputGroupProps extends StyleProps {
  error?: boolean;
}

export const InputGroup: FC<InputGroupProps> = ({className, style, error, children}) => {
  const theme = useTheme('danger');
  return <Group className={classnames([className, classname, {error}])} theme={theme} style={style}>{children}</Group>;
};

const Group = styled.div<{ theme: ThemeProp }>`
display: flex;
border-radius: .25rem;
&.error {
  box-shadow: 0 0 0 .2rem ${({theme: {border}}) => Color(border).setAlpha(0.75).toCSS()};
}
`;
