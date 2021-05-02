import {css} from "@emotion/react";
import styled from "@emotion/styled";
import React, {FC, useEffect, useRef, useState} from "react";

export type AspectTextProps = {
  ratio?: number
  className?: string;
}

/**
 * Change fontSize from height
 * @param {number | undefined} ratio
 * @param {string | undefined} className
 * @param {React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined} children
 * @returns {JSX.Element}
 * @constructor
 */
export const AspectText: FC<AspectTextProps> = ({ratio = 100, className, children}) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const [fontSize, setFontSize] = useState<number | null>(null);
  const _ratio = ratio > 100 ? 100 : ratio < 0 ? 0 : ratio;

  useEffect(() => {
    if (ref.current) {
      setFontSize(ref.current.clientHeight * (_ratio / 100));
    }
  }, [ref.current?.clientHeight, _ratio]);

  return <Box>
    <Text ref={ref} className={className} fontSize={fontSize}>
      {children}
    </Text>
  </Box>;
};

const Box = styled.div`
  height: 100%;
`;

const Text = styled.p<{ fontSize: number | null }>`
  box-sizing: content-box;
  height: 100%;
  ${({fontSize}) => fontSize && css`font-size: ${fontSize}px`};
`;
