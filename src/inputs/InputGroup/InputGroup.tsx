import styled from "@emotion/styled";
import classnames from 'classnames';
import Color from "color-js/color";
import {FC, ReactNode} from "react";
import {useTheme} from "../../hooks/useTheme";
import {ThemeProp} from "../../providers/ThemeProvider";
import {StyleProps} from "../../types";

export const classnameGroup = 'actors-input-group';
export const classnameItem = 'actors-input-item';

export interface InputGroupProps extends StyleProps {
  error?: boolean;
  children?: ReactNode;
}

export const InputGroup: FC<InputGroupProps> = ({className, style, error, children}) => {
  const theme = useTheme('danger');
  return <Group className={classnames([className, classnameGroup, {error}])} theme={theme}
                style={style}>{children}</Group>;
};

const Group = styled.div<{ theme: ThemeProp }>`
  width: 100%;
  display: flex;
  border-radius: .25rem;

  &.error {
    box-shadow: 0 0 0 .2rem ${({theme: {border}}) => Color(border).setAlpha(0.75).toCSS()};
  }

  & > .${classnameItem}:not(:first-child) /* emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason */ {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  & > .${classnameItem}:not(:last-child) /* emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason */ {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
`;
