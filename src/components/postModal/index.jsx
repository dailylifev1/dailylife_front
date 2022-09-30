import { useDispatch, useSelector } from 'react-redux/es/exports';
import styled from 'styled-components';

import ModalBody from 'components/postModal/ModalBody';
import './PostModal.scss';
import { updateModalStatus } from 'reducers/kebab.postModal';

function PostModal(props) {
  const dispatch = useDispatch();
  const { modalOpacity, setModalOpacity } = props;
  const currentPostData = useSelector((state) => state.selectedPostData);

  return (
    <div className="container">
      <ModalWindow
        modalOpacity={modalOpacity}
        id="open-modal"
        onClick={() => {
          setModalOpacity(0);
          dispatch(updateModalStatus(false));
        }}
      >
        <ModalBody
          currentPostData={currentPostData}
          setModalOpacity={setModalOpacity}
          modalOpacity={modalOpacity}
        />
      </ModalWindow>
    </div>
  );
}

export default PostModal;

const ModalWindow = styled.div.attrs({
  className: 'ModalWindow',
})`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.25);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  visibility: visible;
  opacity: ${(props) => props.modalOpacity};
  pointer-events: ${(props) => (props.modalOpacity === 0 ? 'none' : 'auto')};
  transition: all 0.3s;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 23px;

  & > div {
    border-radius: 1rem;
  }
`;
