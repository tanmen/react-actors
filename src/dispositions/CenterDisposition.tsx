import React, {FC} from "react";
import styled from "styled-components";
import {StyleProps} from "../types/StyleProps";

const CenterDisposition: FC<StyleProps> = ({className, style, children}) =>
  <Box className={className} style={style}>
    {children}
  </Box>;

export default CenterDisposition;

const Box = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
`;
