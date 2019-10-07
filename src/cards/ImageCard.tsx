import React, {FC} from "react";
import styled from "styled-components";
import {Image} from "../images";
import {ComponentProps} from "../../types/ComponentProps";

interface Props extends ComponentProps {
  src: string;
  text?: string;
}

const ImageCard: FC<Props> = ({src, text, className}) => {
  return <Box className={className}>
    <Image src={src}/>
    {text ? <Text>{text}</Text> : null}
  </Box>;
};

export default ImageCard;

const Box = styled.div`
display: inline-block;
border-radius: 5px;
padding: 5px;
transition: box-shadow 200ms ease;
&:hover {
  box-shadow: 2px 2px 2px rgba(0,0,0,0.2);
}
`;
const Text = styled.p`
padding: 5px 0 0;
`;
