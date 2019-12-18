import React, {FC} from "react";
import styled from "styled-components";
import {StyleProps} from "../types/StyleProps";
import SquareDisposition from "../dispositions/SquareDisposition";
import Image from "./Image";

interface Props extends StyleProps {
  src: string
  alt?: string
}

const RoundImage: FC<Props> = ({src, alt, className, style}) => <SquareDisposition className={className} style={style}>
  <Img src={src} alt={alt}/>
</SquareDisposition>;

export default RoundImage;

const Img = styled(Image)`
& > .img {
  object-fit: cover;
  height: 100%;
  width: 100%;
  border-radius: 50%;
}
`;
