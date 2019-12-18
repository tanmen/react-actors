import React, {FC} from "react";
import styled from "styled-components";
import color from "../themes/color";
import {ButtonProps} from "./props";

const Button: FC<ButtonProps> = (props) => <StyledButton
  className={props.className}
  style={props.style}
  disabled={props.disabled}
  onClick={props.onClick}
>{props.children}</StyledButton>;

export default Button;

const StyledButton = styled.button`
color: ${color.default.primary.font.hex};
padding: 5px;
border: 1px solid ${color.default.primary.border.hex};
border-radius: 5px;
&:disabled {
  color: rgba(
    ${color.default.primary.font.dec[0]},
    ${color.default.primary.font.dec[1]},
    ${color.default.primary.font.dec[2]},
    0.2
  );  
}
`;
