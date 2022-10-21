import styled from 'styled-components';

import CloseButtonIcon from 'components/Icons/CloseButtonIcon';
import useWritePage from 'hooks/useWritepPage';
import devices from 'styles/device';

function WritePage({ setOpenPostModal, changeOpenPostModal }) {
  const { handleSubmit, closeModal, formValues, setFormValues, updateFiles } =
    useWritePage(setOpenPostModal, changeOpenPostModal);
  return (
    <Container>
      <Form action="/" method="post" onSubmit={(e) => handleSubmit(e)}>
        <Modal onClick={() => closeModal()}>
          <Boarding
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <Title>게시글 작성</Title>
            <Body>
              <Picture>
                <ExampleContainer>
                  <ExamplePhotoList>
                    <ImageLabel htmlFor="selectImg">
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
                    </ImageLabel>
                  </ExamplePhotoList>

                  {formValues.fileImage !== '' && (
                    <ExampleImage alt="sample" src={formValues.fileImage} />
                  )}
                </ExampleContainer>
                {formValues.fileImage === '' && (
                  <PhotoExplain>
                    아래 버튼을 클릭하여 이미지를 추가해주세요.
                  </PhotoExplain>
                )}
                {formValues.fileImage === '' && (
                  <CloudeImage src="/assets/cloud-upload.png" alt="" />
                )}
              </Picture>
              <ContentContainer>
                <BodyTitle
                  name="title"
                  placeholder="제목을 입력해주세요"
                  onChange={(e) =>
                    setFormValues((prevState) => ({
                      ...prevState,
                      title: e.target.value,
                    }))
                  }
                />
                <BodyContent
                  name="content"
                  placeholder="내용을 입력해주세요"
                  onChange={(e) =>
                    setFormValues((prevState) => ({
                      ...prevState,
                      content: e.target.value,
                    }))
                  }
                />
                <SubmitButton>게시물 등록</SubmitButton>
              </ContentContainer>
            </Body>
            <ModalClose type="button" onClick={closeModal}>
              <CloseButtonIcon />
            </ModalClose>
          </Boarding>
        </Modal>
      </Form>
    </Container>
  );
}

export default WritePage;

const Container = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  cursor: default;
  visibility: visible;
  // overflow-y: scroll;
`;
const Form = styled.form``;
const Modal = styled.section`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.25);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  visibility: visible;
  opacity: 1;
  font-family: 'Pretendard';
`;
const Boarding = styled.section`
  position: absolute;
  max-width: 990px;
  padding: 1.5em;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  visibility: visible;
  transition: all 0.3s;
  box-shadow: 0px 0px 35px rgba(0, 0, 0, 0.15);
  border-radius: 12px;
  @media ${devices.mobileS} {
    width: 80%;
  }
  @media ${devices.tablet} {
    width: 90%;
  }
`;
const Title = styled.div`
  width: 91px;
  height: 24px;
  left: 3vh;
  top: 4vh;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  /* identical to box height */
  letter-spacing: -0.01em;
  color: #909090;
`;
const Body = styled.section`
  display: flex;
  gap: 2vh;
  margin-top: 2vh;
  @media ${devices.mobileS} {
    flex-direction: column;
  }
  @media ${devices.tablet} {
    flex-direction: row;
  }
`;
const Picture = styled.div`
  position: relative;
  max-width: 560px;
  aspect-ratio: 1;
  align-items: center;
  background: #f4f4f4;
  border: 1.5px solid #eaeaea;
  border-radius: 12px;
  box-sizing: border-box;
  @media ${devices.mobileS} {
    width: auto;
  }
  @media ${devices.tablet} {
    width: 64%;
  }
`;
const ContentContainer = styled.div`
  position: relative;
  @media ${devices.mobileS} {
    width: 100%;
  }
  @media ${devices.tablet} {
    width: 36%;
  }
`;
const CloudeImage = styled.img`
  position: absolute;
  left: 49%;
  top: 42%;
  transform: translate(-50%, -50%);
  z-index: 0;
`;
const ExampleContainer = styled.div`
  width: 100%;
  height: 100%;
`;
const ExampleImage = styled.img`
  z-index: 2;
  object-fit: cover;
  width: 100%;
  max-width: 557px;
  height: 100%;
  max-height: 520px;
  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;
  border-radius: 10px;
  background-position: center;
  background-size: contain, cover;
  background-repeat: no-repeat;
`;
const ImageLabel = styled.label`
  float: left;
`;
const ExamplePhotoList = styled.div`
  display: flex;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 4%);
  bottom: 1.5vh;
  width: 96%;
  height: 18%;
  background: rgba(0, 0, 0, 0.42);
  align-items: center;
  opacity: 1;
  border: 1px solid #eaeaea;
  border-radius: 6px;
`;
const PhotoExplain = styled.div`
  position: absolute;
  width: 100%;
  height: 46px;
  top: 50%;
  margin: auto;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  color: #909090;
`;
const BodyTitle = styled.input`
  width: 100%;
  right: 0.2vh;
  top: 4px;
  border: 0;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 26px;

  &::placeholder {
    color: #bcbcbc;
  }

  &:focus {
    outline: none;
  }
`;
const BodyContent = styled.textarea`
  margin-top: 10px;
  width: 100%;
  height: 50%;
  right: 1px;
  top: 5vh;
  border: none;
  resize: none;
  border-bottom: 1px solid #eaeaea;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  /* line-height: 23px; */
  letter-spacing: -0.01em;
  &::placeholder {
    color: #bcbcbc;
  }
  &:focus {
    outline: none;
  }
  @media ${devices.mobileS} {
    height: 155px;
  }
  @media ${devices.tablet} {
    height: 50%;
  }
`;
const SubmitButton = styled.button`
  width: 102px;
  height: 34px;
  cursor: pointer;
  font-family: 'Pretendard';
  font-style: normal;
  font-size: 17px;
  line-height: 20px;
  color: #ffffff;
  background: #ff9500;
  border-radius: 6px;
  border: none;
  &:hover {
    color: #000000;
  }
  @media ${devices.mobileS} {
    float: right;
  }
  @media ${devices.tablet} {
    position: absolute;
    bottom: 0;
    right: 0;
  }
`;
const ModalClose = styled.button`
  position: absolute;
  right: 1.3vw;
  top: 1.3vw;
  cursor: pointer;
`;
