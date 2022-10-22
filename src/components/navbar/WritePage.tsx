import CloseButtonIcon from 'components/Icons/CloseButtonIcon';
import useWritePage from 'hooks/useWritepPage';
import './WritePage.scss';

function WritePage({ setOpenPostModal, changeOpenPostModal }) {
  const { handleSubmit, closeModal, formValues, setFormValues, updateFiles } =
    useWritePage(setOpenPostModal, changeOpenPostModal);
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
                        onChange={updateFiles}
                      />
                    </label>
                  </div>

                  {formValues.fileImage !== '' && (
                    <img
                      className="newPost-body-example-pic"
                      alt="sample"
                      src={formValues.fileImage}
                    />
                  )}
                </div>
                {formValues.fileImage === '' && (
                  <p className="newPost-body-pic-explain">
                    아래 버튼을 클릭하여 이미지를 추가해주세요.
                  </p>
                )}
                {formValues.fileImage === '' && (
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
                  onChange={(e) =>
                    setFormValues((prevState) => ({
                      ...prevState,
                      title: e.target.value,
                    }))
                  }
                />
                <textarea
                  className="newPost-body-content"
                  name="content"
                  placeholder="내용을 입력해주세요"
                  onChange={(e) =>
                    setFormValues((prevState) => ({
                      ...prevState,
                      content: e.target.value,
                    }))
                  }
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
