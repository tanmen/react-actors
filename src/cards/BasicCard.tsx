import React, {FC} from "react";
import styled, {css} from "styled-components";
import {RoundImage} from "../images";
import color from "../themes/color";
import {StyleProps} from "../types/StyleProps";

interface Props extends StyleProps {
  icon: { src: string, alt?: string }
  name: string
  info: string
  text: string
  images: Array<{ src: string, alt?: string }>
}

const BasicCard: FC<Props> = (props) => <Box className={props.className}>
  <Header>
    <RoundImage width={30} height={30} src={props.icon.src} alt={props.icon.alt}/>
    <Title>{props.name}</Title>
    <Info>{props.info}</Info>
  </Header>
  <ImgBox count={props.images.length}>{props.images.map((image, index) =>
    <Img key={index} src={image.src} alt={image.alt}/>)}</ImgBox>
  <Body>{props.text}</Body>
</Box>;

export default BasicCard;

const Box = styled.div`
border: 1px solid ${color.default.primary.border.hex};
border-radius: 5px;
width: 242px;
`;
const Header = styled.div`
display: grid;
padding: 10px 5px;
grid-template-columns: auto 1fr auto;
grid-template-rows: 1fr;
gap: 5px;
align-items: center;
`;
const Title = styled.p`
font-size: 15px;
font-weight: bold;
`;
const Info = styled.p`
font-size: 12px;
color: rgba(0,0,0,0.2);
`;
const ImgBox = styled.div<{ count: number }>`
height: 240px;
display: grid;
${({count}) => {
  if (count > 6) {
    return css`
      grid-template-columns: repeat(auto-fit, 80px);
      grid-template-rows: repeat(auto-fit, 80px);
    `
  } else if (count > 4) {
    return css`
      grid-template-columns: repeat(auto-fit, 120px);
      grid-template-rows: repeat(auto-fit, 80px);
    `
  } else if (count > 2) {
    return css`
      grid-template-columns: repeat(auto-fit, 120px);
      grid-template-rows: repeat(auto-fit, 120px);
    `
  }
  return css`
    grid-template-columns: 240px;
    grid-template-rows: repeat(auto-fit, minmax(120px, auto));
  `
}}`;
const Img = styled.img`
object-fit: cover;
width: 100%;
height: 100%;
`;
const Body = styled.p`
padding: 10px 5px;
height: 80px;
`;
