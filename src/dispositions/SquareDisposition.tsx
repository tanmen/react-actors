import React, {FC} from "react";
import styled from "styled-components";

const SquareDisposition: FC<ComponentProps> = ({className, children}) => <Box className={className}>
  <Content>
    {children}
  </Content>
</Box>;

export default SquareDisposition;

const Box = styled.div`
position: relative;
&:before {
  display: block;
  content: '';
  padding-top: 100%;
}
`;

const Content = styled.div`
position: absolute;
top: 0;
width: 100%;
height: 100%;
`;
