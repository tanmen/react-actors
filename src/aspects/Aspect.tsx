import styled from '@emotion/styled';
import React, {FC} from 'react';

export type AspectProps = {
  ratio?: number;
  size?: string;
  className?: string
}

export const Aspect: FC<AspectProps> = ({ratio = 100, size = '100%', className, children}) =>
  <Wrap ratio={ratio > 100 ? 100 : ratio < 0 ? 0 : ratio} width={size}>
    <Box className={className}>
      {children}
    </Box>
  </Wrap>;

const Wrap = styled.div<{ ratio: number, width: string }>`
  position: relative;
  width: ${({width}) => width};

  &:before {
    content: "";
    display: block;
    padding-top: ${({ratio}) => ratio}%;
  }
`;

const Box = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;
