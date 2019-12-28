import React, {FC} from "react";
import styled from "styled-components";
import Image, {Props as ImageProps} from "../images/Image";

interface Props extends ImageProps {
  text?: string;
}

const ImageCard: FC<Props> = ({ text, className, ...props}) => {
  return <Box className={className}>
    <Image {...props}/>
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
  box-shadow: 0 0 10px rgba(0,0,0,0.2);
}
`;
const Text = styled.p`
padding: 5px 0 0;
`;
