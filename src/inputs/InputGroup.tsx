import React, {createContext, FC} from "react";
import styled, {css} from "styled-components";
import {ColorType} from "../types/ColorType";
import {SizeType} from "../types/SizeType";

const {Provider, Consumer} = createContext({size: SizeType.Normal, color: ColorType.Primary});

type Props = { size?: SizeType, color?: ColorType };
const InputGroup: FC<Props> = ({
                                 size = SizeType.Normal,
                                 color = ColorType.Primary,
                                 children
                               }) =>
  <Provider value={{size, color}}>
    <Group size={size} className="input-group">
      {children}
    </Group>
  </Provider>;

export default InputGroup;

const Css = {
  size: {
    default: css`
      height: calc(1rem + .75rem + 2px);
    `,
    small: css`
      height: calc(.875rem + .50rem + 2px);
    `,
    large: css`
      height: calc(1.25rem + 1rem + 2px);
    `,
  }
};

export const Prepend: FC = ({children}) =>
  <Consumer>
    {value => <SPrepend {...value}>
      {children}
    </SPrepend>}
  </Consumer>;

const SPrepend = styled.div<Required<Props>>`
display: flex;
margin-right: -1px;
background-color: #e9ecef;
border: 1px solid #ced4da;
border-radius: .25rem 0 0 .25rem;
&:not(:first-child) {
  border-left: none;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
&:not(:last-child) {
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
${({size}) => Css.size[size]}
`;

export const PrependText = styled.span`
display: flex;
align-items: center;
padding: .375rem .75rem;
margin-bottom: 0;
font-size: 1rem;
font-weight: 400;
line-height: 1.5;
color: #495057;
text-align: center;
white-space: nowrap;
`;

export const Group = styled.div<{ size: SizeType }>`
position: relative;
display: flex;
flex-wrap: wrap;
align-items: stretch;
width: 100%;
& > input {
  position: relative;
  flex: 1 1 0;
  min-width: 0;
  margin-bottom: 0;
}
& > input:not(:first-child) {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
& > input:not(:last-child) {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
`;
