import {css} from "@emotion/react";
import styled from "@emotion/styled";
import classnames from "classnames";
import {FC, HTMLAttributes} from "react";
import {useTheme} from "../../hooks";
import {ThemeProp} from "../../providers";
import {SizeType, StyleProps} from "../../types";
import {extractSizeStyle} from "../../utils";
import {inputStyles} from "../styles";
import {classnameGroup, classnameItem} from "./InputGroup";

export type InputAdditionProps = {
  size?: SizeType;
} & StyleProps & Omit<HTMLAttributes<HTMLDivElement>, 'size'>;

export const InputAddition: FC<InputAdditionProps> = ({size = 'normal', className, style, children, ...props}) => {
  const theme = useTheme('secondary');
  return <Style {...props} sizeType={size} className={classnames('actors-input-addition', classnameItem, className)} style={style}
                theme={theme}>{children}</Style>;
};

const Style = styled.div<{ sizeType: SizeType, theme: ThemeProp }>(({theme: {font, background, border}}) => css`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  line-height: 1.5;
  color: ${font};
  white-space: nowrap;
  background-color: ${background};
  border: 1px solid ${border};

  .${classnameGroup} > .${classnameItem}:not(:first-of-type) {
    margin-left: -1px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  .${classnameGroup} > .${classnameItem}:not(:last-of-type) {
    margin-right: -1px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
`, extractSizeStyle(inputStyles));

