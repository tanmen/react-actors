import React, {FC} from "react";
import styled from "styled-components";
import {ComponentProps} from "../../types/ComponentProps";
import SquareDisposition from "../dispositions/SquareDisposition";
import Image from "./Image";

interface Props extends ComponentProps {
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
