import React, {FC} from "react";
import styled, {css} from "styled-components";
import color from "../themes/color";

interface Props extends Components {
  icon: { src: string, alt?: string }
  name: string
  text: string
  images: Array<{ src: string, alt?: string }>
}

const BasicCard: FC<Props> = (props) => <Box className={props.className}>
  <Header><Icon src={props.icon.src} alt={props.icon.alt}/>{props.name}</Header>
  <ImgBox count={props.images.length}>{props.images.map(image => <Img src={image.src} alt={image.alt}/>)}</ImgBox>
  <Body>{props.text}</Body>
</Box>;

export default BasicCard;

const Box = styled.div`
border: 1px solid ${color.default.border};
border-radius: 5px;
width: 210px;
`;
const Header = styled.div`
display: flex;
padding: 5px;
`;
const Icon = styled.img`
object-fit: cover;
height: 25px;
width: 25px;
margin-right: 5px;
border-radius: 12px;
`;
const ImgBox = styled.div<{ count: number }>`
height: 210px;
display: grid;
${({count}) => count > 2 ? css`
  grid-template-columns: repeat(auto-fit, minmax(70px, 105px));
  grid-template-rows: repeat(auto-fit, minmax(70px, 105px));
` : css`
  grid-template-columns: 210px;
  grid-template-rows: repeat(auto-fit, minmax(105px, auto));
`}`;
const Img = styled.img`
object-fit: cover;
width: 100%;
height: 100%;
`;
const Body = styled.div`
padding: 5px;
height: 50px;
`;
