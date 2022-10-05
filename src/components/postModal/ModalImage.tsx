import styled from "styled-components";

import devices from "styles/device";

interface Props {
  image: string;
}

function ModalImage({ image }: Props) {
  return (
    <Image
      style={{
        backgroundImage: `url(${image})`,
      }}
    />
  );
}

export default ModalImage;

const Image = styled.div.attrs({className: 'modal-image'})`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 10px;
  background-position: center;
  background-size: contain, cover;
  background-repeat: no-repeat;

  @media ${devices.mobileS} {
    width: 90%;
    height: 200px;
  }
  @media ${devices.tablet} {
    height: 300px;
  }
  @media ${devices.laptop} {
    width: 50%;
    height: 100%;
  }
`