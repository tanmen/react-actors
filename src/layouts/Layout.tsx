import styled from "@emotion/styled";
import React, {FC, ReactNode} from 'react';
import {StyleProps} from "../types/StyleProps";

interface Props extends StyleProps {
  header: ReactNode
  footer?: ReactNode
}

const Layout: FC<Props> = ({header, children, footer = <Empty/>, className, style}) =>
  <Body className={className} style={style}>
    {header}
    <div>
      {children}
    </div>
    {footer}
  </Body>;
export default Layout;

const Body = styled.div`
display: grid;
grid-template-rows: auto 1fr auto;
grid-row-gap: 10px;
align-items: flex-start;
min-height: 100vh;
`;

const Empty = styled.div`
display: none;
content: '';
`;
