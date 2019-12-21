import React, {FC} from "react";
import styled from "styled-components";

const InputGroup: FC = ({children}) => <Group className="input-group">
  {children}
</Group>;

export default InputGroup;

export const Prepend = styled.div`
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

export const Group = styled.div`
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
