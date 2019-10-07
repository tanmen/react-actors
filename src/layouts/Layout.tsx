import React, {ReactNode, FC} from 'react';
import styled from "styled-components";
import {ComponentProps} from "../../types/ComponentProps";

interface Props extends ComponentProps {
  header: ReactNode
  footer?: ReactNode
}

const Layout: FC<Props> = (props) =>
  <Body className={props.className}>
    {props.header}
    {props.children}
    {props.footer}
  </Body>;
export default Layout;

const Body = styled.div`
display: grid;
grid-template-rows: auto 1fr auto;
grid-row-gap: 10px;
align-items: flex-start;
min-height: 100vh;
`;
