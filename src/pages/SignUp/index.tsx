import AvatarIcon from 'components/Icons/AvatarIcon';
import { useState } from 'react';
import styled from 'styled-components/macro';

import useForm from '../../hooks/useForm';
import './signUp.scss';
import SignUpInput from './SignUpInput';

function SignUp() {
  const signUpData = {
    userName: '',
    userEmail: '',
    userId: '',
    password: '',
    passwordConfirm: '',
  };
  const [inputValues, setInputValues] = useState(signUpData);
  const signUpInputData = [
    {
      type: 'text',
      title: '사용자 이름',
      setText: setInputValues,
      formType: 'username',
      limit: 20,
      placeholder: '사용자 이름',
    },
    {
      type: 'email',
      title: '이메일',
      setText: setInputValues,
      formType: 'email',
      limit: 30,
      placeholder: '이메일',
    },
    {
      type: 'text',
      title: '아이디',
      setText: setInputValues,
      formType: 'userId',
      limit: 30,
      placeholder: '아이디',
    },
    {
      type: 'password',
      title: '비밀번호',
      setText: setInputValues,
      formType: 'password',
      limit: 15,
      placeholder: '비밀번호',
    },
    {
      type: 'password',
      title: '비밀번호 확인',
      setText: setInputValues,
      formType: 'password',
      limit: 15,
      placeholder: '비밀번호 확인',
    },
  ];
  const { handleChange, handleSubmit } = useForm(signUpData);
  const [imageName, setImageName] = useState<string[]>([]);
  const [file, setFile] = useState('');
  const [fileImage, setFileImage] = useState<string>('');

  return (
    <SignUpWrapper>
      <form action="/signin" method="POST" onSubmit={() => handleSubmit()}>
        <div className="register-form-wrapper">
          <p className="register-info-title">계정 생성</p>
          <div className="register-avatar-wrapper">
            <label className="register-avatar-lable" htmlFor="selectImg">
              <AvatarIcon width={78} height={78} image={fileImage} />
            </label>
            <input
              style={{ display: 'none' }}
              id="selectImg"
              name="imgUpload"
              type="file"
              accept="image/*"
              onChange={(e) => {
                if (e.target.files !== null) {
                  setFileImage(URL.createObjectURL(e.target.files[0]));
                  for (let i = 0; i < e.target.files.length; i++)
                    setFile(`${file} ${e.target.files[i].name}`);
                  setImageName([...imageName]);
                }
              }}
            />
          </div>
          <div className="register-input-container">
            {signUpInputData.map((item) => (
              <div className="register-input-wrapper">
                <SignUpInput
                  type={item.type}
                  title={item.title}
                  setText={item.setText}
                  formType={item.formType}
                  limit={item.limit}
                  placeholder={item.placeholder}
                />
              </div>
            ))}
          </div>
          <button type="submit" className="register-form-submit-btn">
            가입하기
          </button>
        </div>
      </form>
    </SignUpWrapper>
  );
}

const SignUpWrapper = styled.div`
  position: relative;
  top: 8vh;
  width: 388px;
  height: 671px;

  background: #ffffff;
  box-shadow: 0px 0px 35px rgba(0, 0, 0, 0.15);
  border-radius: 12px;
  margin: auto;
`;

export default SignUp;
