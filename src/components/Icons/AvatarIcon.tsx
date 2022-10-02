import styled from 'styled-components';

AvatarIcon.defaultProps = {
  width: 38,
  height: 38,
  image: ''
}

interface AvatarProps {
  width?: number | undefined;
  height?: number | undefined;
  image?: string;
}

function AvatarIcon({ width = 38, height = 38, image }: AvatarProps) {
  return <Avatar width={width} height={height} image={image} />;
}
export default AvatarIcon;
const Avatar = styled.div<AvatarProps>`
  border-radius: 50%;
  float: left;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  aspect-ratio: 1;
  background-image: ${(props) =>
    props.image !== '' ? `url(${props.image})` : `url('/assets/avatarImg.png')`};
  background-position: center;
  background-size: cover;
`;
