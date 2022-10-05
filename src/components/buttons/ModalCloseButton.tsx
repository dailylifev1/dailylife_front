import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { type OpacityType } from 'components/card/useCards';
import PostModalCloseButtonIcon from 'components/Icons/PostModalCloseButtonIcon';
import { updateModalStatus } from 'reducers/kebab.postModal';
import devices from 'styles/device';

interface Props {
  setModalOpacity: React.Dispatch<React.SetStateAction<OpacityType>>
}

function ModalCloseButton({ setModalOpacity }: Props) {
  const dispatch = useDispatch();
  return (
    <ModalClose
      title="title"
      onClick={() => {
        setModalOpacity(0);
        dispatch(updateModalStatus(false));
      }}
    >
      <PostModalCloseButtonIcon />
    </ModalClose>
  );
}

export default ModalCloseButton;

const ModalClose = styled.div`
  position: absolute;
  margin-left: auto;
  width: 18px;
  aspect-ratio: 1;
  color: #aaa;
  text-decoration: none;

  & svg {
    position: absolute;
  }
  & svg:nth-of-type(1) {
    transform: rotate(90deg);
  }
  &:hover {
    color: black;
    cursor: pointer;
  }

  @media ${devices.mobileS} {
    right: -4vh;
    top: -30vh;
  }
  @media ${devices.tablet} {
    right: -7vh;
    top: -40vh;
  }
  @media ${devices.laptop} {
    right: -3vh;
    top: -10vh;
  }
  @media ${devices.laptopL} {
    right: -7vh;
  }
`;
