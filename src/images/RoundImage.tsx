import React, {FC} from "react";
import styled from "styled-components";
import {StyleProps} from "../types/StyleProps";
import SquareDisposition from "../dispositions/SquareDisposition";
import Image from "./Image";

interface Props extends StyleProps {
  src: string;
  alt?: string;
  empty?: string;
  width: string | number;
  height: string | number;
}

const RoundImage: FC<Props> = ({ className, style, ...props}) => <SquareDisposition className={className} style={style}>
  <Img {...props}/>
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
