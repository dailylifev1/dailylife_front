import React from 'react';
import styled from 'styled-components/macro';

import useCardItem from './useCardItem';
import { type OpacityType } from './useCards';

import devices from 'styles/device';

interface Props {
  boardNum: number;
  src: string;
  title: string;
  content: string;
  heartState: boolean;
  userName: string;
  type?: string;
  setModalOpacity: React.Dispatch<React.SetStateAction<OpacityType>>;
}

function CardItem({
  boardNum,
  src,
  title,
  userName,
  content,
  heartState,
  setModalOpacity,
  type = 'default',
}: Props) {
  const { handleClick, clickHeartEvent, like } = useCardItem({
    heartState,
    setModalOpacity,
    boardNum,
    userName,
    src,
    title,
    content,
  });

  const Fullheart = '/assets/fullHeart.png';
  const Emptyheart = '/assets/heart.png';
  return (
    <CardWrapper type={type} onClick={handleClick}>
      <ImgWrapper>
        {src !== undefined ? <Thumbnail alt="img" src={src} /> : ''}
        <InfoWrapper>
          <UnderInfo img={src}>{content}</UnderInfo>
          <Text img={src}>{title}</Text>
          <LikeButton
            onClick={clickHeartEvent}
            src={like ? Fullheart : Emptyheart}
            alt="like"
          />
        </InfoWrapper>
        <GradientBar img={src} />
      </ImgWrapper>
      <CardInfo />
    </CardWrapper>
  );
}
const InfoWrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 4vw;
`;

const CardWrapper = styled.li<{ type: string }>`
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  object-fit: cover;
  aspect-ratio: 1;
  background-color: rgb(247, 247, 247);
  box-shadow: rgba(79, 79, 117, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

  &:nth-of-type(9n + 2),
  &:nth-of-type(9n + 7) {
    ${(props) =>
      props.type !== 'myPost'
        ? `grid-column: span 2;
    grid-row: span 2;
    height: 100%;`
        : ''}
  }
`;

const Thumbnail = styled.img`
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
  overflow: hidden;
  object-fit: cover;
  transition: all 0.2s linear;
`;
const ImgWrapper = styled.figure`
  position: relative;
  margin: 0 auto 0 auto;
  width: auto;
  height: 100%;
  overflow: hidden;
  object-fit: cover;
  border-radius: 10px;
  cursor: pointer;
`;
const GradientBar = styled.div<{ img: string }>`
  position: absolute;
  width: 100%;
  height: 50%;
  bottom: 0;
  opacity: 0.6;
  background: ${(props) =>
    props.img !== undefined
      ? `linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.7) 91.15%
  )`
      : ''};
`;
const CardInfo = styled.div`
  font-family: 'pretendard';
  color: #ffffff;
  cursor: pointer;
  width: 100%;
`;

const Text = styled.h5.attrs({ className: 'card-text' })<{ img: string }>`
  position: absolute;
  margin-left: 0.7vw;
  z-index: 1;
  color: ${(props) => (props.img !== undefined ? 'white' : 'black')};
  line-height: 30px;
  display: block;
  text-overflow: ellipsis;
  word-break: break-all;
  white-space: nowrap;
  overflow: hidden;
  bottom: 2vw;
  font-weight: 500;
  width: 80%;

  @media ${devices.mobileS} {
    font-size: 12px;
  }
  @media ${devices.laptop} {
    font-size: 1vw;
  }
`;
const UnderInfo = styled.p.attrs({ className: 'card-underInfo' })<{
  img: string;
}>`
  position: absolute;
  margin-left: 0.7vw;
  z-index: 1;
  color: ${(props) => (props.img !== undefined ? 'white' : 'black')};
  width: 80%;
  font-weight: 300;
  cursor: pointer;
  font-family: 'pretendard';
  line-height: 30px;
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  bottom: 0.5vw;
  @media ${devices.mobileS} {
    font-size: 11px;
  }
  @media ${devices.laptop} {
    font-size: 0.9vw;
  }
`;
const LikeButton = styled.img`
  z-index: 1;
  position: absolute;
  right: 0.75vw;
  width: 26.78px;
  height: 26.78px;
  @media ${devices.mobileS} {
    bottom: 10px;
  }
  @media ${devices.laptop} {
    top: 0.2vw;
    bottom: auto;
  }
`;
export default CardItem;
