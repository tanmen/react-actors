import React, {FC} from "react";
import styled from "styled-components";
import SquareDisposition from "../dispositions/SquareDisposition";

interface Props extends ComponentProps {
  src: string
  alt?: string
}

const RoundImage: FC<Props> = (props) => <SquareDisposition className={props.className}>
  <Img src={props.src} alt={props.alt}/>
</SquareDisposition>;

export default RoundImage;

const Img = styled.img`
object-fit: cover;
height: 100%;
width: 100%;
border-radius: 50%;
`;
