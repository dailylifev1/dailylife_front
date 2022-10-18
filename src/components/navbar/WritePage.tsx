import axios from 'axios';
import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { getAccessToken } from 'common/utils';
import CloseButtonIcon from 'components/Icons/CloseButtonIcon';
import './WritePage.scss';
import { setLoading } from 'reducers/loading';
import { useAppDispatch } from 'store/hooks';

function WritePage({ setOpenPostModal, changeOpenPostModal }) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [thumbNail] = useState('dummy');
  const [imageName, setImageName] = useState<File[]>([]);
  const [file, setFile] = useState('');
  const [fileImage, setFileImage] = useState('');

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (localStorage.getItem('accessToken') === null) {
      navigate('/login');
      setOpenPostModal(false);
      return '';
    }
    dispatch(setLoading(true));
    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('thumbNail', thumbNail);
    // eslint-disable-next-line no-shadow
    imageName.forEach((file) => {
      formData.append('imageName', file);
    });
    if (process.env.REACT_APP_HOST !== undefined) {
      axios
        .post(`${process.env.REACT_APP_HOST}/api/board/create`, formData, {
          headers: {
            'X-ACCESS-TOKEN': getAccessToken(),
            'Content-Type': 'multipart/form-data',
          },
        })
        .then(() => {
          dispatch(setLoading(false));
          window.location.replace('/');
        })
        .catch((err) => console.log(err));
      closeModal();
    }
    return undefined;
  }
  const closeModal = () => {
    changeOpenPostModal(false);
  };
  return (
    <div className="newPost-container">
      <form
        className="post-form"
        action="/"
        method="post"
        onSubmit={(e) => handleSubmit(e)}
      >
        <section className="newPost-modal" onClick={() => closeModal()}>
          <section
            className="newPost-boarding"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <div className="newPost-title">게시글 작성</div>
            <section className="newPost-body">
              <div className="newPost-body-pic">
                <div className="newPost-body-example-container">
                  <div className="newPost-body-example-pic-list">
                    <label className="select-img-btn" htmlFor="selectImg">
                      <img
                        src="/assets/addPicture.png"
                        style={{ cursor: 'pointer', marginLeft: '10px' }}
                        alt=""
                      />
                      <input
                        style={{ display: 'none' }}
                        id="selectImg"
                        name="imgUpload"
                        type="file"
                        accept="image/*"
                        onChange={(e) => {
                          if (e.target.files !== null) {
                            setFileImage(
                              URL.createObjectURL(e.target.files[0]),
                            );
                            for (let i = 0; i < e.target.files.length; i += 1)
                              setFile(`${file} ${e.target.files[i].name}`);
                            setImageName([...imageName, ...e.target.files]);
                          }
                        }}
                      />
                    </label>
                  </div>

                  {fileImage !== '' && (
                    <img
                      className="newPost-body-example-pic"
                      alt="sample"
                      src={fileImage}
                    />
                  )}
                </div>
                {fileImage === '' && (
                  <p className="newPost-body-pic-explain">
                    아래 버튼을 클릭하여 이미지를 추가해주세요.
                  </p>
                )}
                {fileImage === '' && (
                  <img
                    className="newPost-body-pic-cloudPic"
                    src="/assets/cloud-upload.png"
                    alt=""
                  />
                )}
              </div>
              <div className="newPost-body-content-container">
                <input
                  className="newPost-body-title"
                  name="title"
                  placeholder="제목을 입력해주세요"
                  onChange={(e) => setTitle(e.target.value)}
                />
                <textarea
                  className="newPost-body-content"
                  name="content"
                  placeholder="내용을 입력해주세요"
                  onChange={(e) => setContent(e.target.value)}
                />
                <button type="submit" className="submit-btn">
                  게시물 등록
                </button>
              </div>
            </section>
            <button
              type="button"
              className="newPost-modal-close"
              onClick={closeModal}
            >
              <CloseButtonIcon />
            </button>
          </section>
        </section>
      </form>
    </div>
  );
}

export default WritePage;
