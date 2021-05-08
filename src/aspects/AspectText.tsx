import {css} from "@emotion/react";
import styled from "@emotion/styled";
import React, {CSSProperties, FC, useEffect, useRef, useState} from "react";
import {useResizeObserver} from "../hooks/useResizeObserver";

export type AspectTextProps = {
  ratio?: number
  className?: string;
  textStyle?: CSSProperties
}

/**
 * Change fontSize from height
 * @param {number | undefined} ratio
 * @param {string | undefined} className
 * @param {React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined} children
 * @returns {JSX.Element}
 * @constructor
 */
export const AspectText: FC<AspectTextProps> = ({ratio = 100, className, textStyle, children}) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const [height, setHeight] = useState<number | null>();
  const [fontSize, setFontSize] = useState<number | null>(null);
  const _ratio = ratio > 100 ? 100 : ratio < 0 ? 0 : ratio;

  useResizeObserver((elm) => {
    const {paddingTop, paddingBottom} = getComputedStyle(elm);
    setHeight(elm.clientHeight - Number(paddingTop.replace('px', '')) - Number(paddingBottom.replace('px', '')));
  }, ref);

  useEffect(() => {
    if (height) {
      setFontSize(height * (_ratio / 100));
    }
  }, [height, _ratio]);

  return <Box ref={ref} className={className}>
    <Text fontSize={fontSize} style={textStyle}>
      {children}
    </Text>
  </Box>;
};

const Box = styled.div`
  box-sizing: content-box;
  height: 100%;
`;

const Text = styled.p<{ fontSize: number | null }>`
  ${({fontSize}) => fontSize
          ? css`font-size: ${fontSize}px;`
          : css`display: none;`
  }
`;
