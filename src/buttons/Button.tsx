import React, {FC} from "react";
import styled from "styled-components";
import color from "../themes/color";
import {BaseProps} from "./index";

const Button: FC<BaseProps> = (props) => <StyledButton
  className={props.className}
  disabled={props.disabled}
  onClick={props.onClick}
>{props.children}</StyledButton>;

export default Button;

const StyledButton = styled.button`
color: ${color.default.fontPrimary.hex};
padding: 5px;
border: 1px solid ${color.default.border.hex};
border-radius: 5px;
&:disabled {
  color: rgba(
    ${color.default.fontPrimary.dec[0]},
    ${color.default.fontPrimary.dec[1]},
    ${color.default.fontPrimary.dec[2]},
    0.2
  );  
}
`;
