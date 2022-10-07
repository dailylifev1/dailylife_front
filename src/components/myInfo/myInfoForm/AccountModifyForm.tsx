import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import './accountManage.scss';
import MyInfoInput from './MyInfoInput';
import MyInfoTitle from './MyInfoTitle';

import { validate } from 'common/utils';
import MyInfoButton from 'components/buttons/SubmitButton';

function AccountModifyForm({ textArr }) {
  const location = useLocation();
  const [inputCurrentPassword, setInputCurrentPassword] = useState('');
  const [inputNewPassword, setInputNewPassword] = useState('');
  const [inputConfirmPassword, setInputConfirmPassword] = useState('');

  function activator() {
    const firstErrorMsg =
      validate(inputCurrentPassword, 'password').password !== undefined;
    const secondErrorMsg =
      validate(inputNewPassword, 'password').password !== undefined;
    const thirdErrorMsg =
      validate(inputConfirmPassword, 'password').password !== undefined;

    if (firstErrorMsg || secondErrorMsg || thirdErrorMsg) return false;
    return true;
  }

  return (
    <div className="account-modify-container">
      <MyInfoTitle path={location.pathname} textArr={textArr} />
      <div className="account-password-info">
        <p className="account-password-info-title">비밀번호 변경</p>
      </div>
      <div className="account-modify-input-wrapper">
        <div className="row">
          <p className="account-modify-input">현재 비밀번호</p>
          <MyInfoInput
            type="password"
            formType="password"
            setState={setInputCurrentPassword}
          />
        </div>
        <div className="row">
          <p className="account-modify-input">새 비밀번호</p>
          <MyInfoInput
            type="password"
            formType="password"
            setState={setInputNewPassword}
          />
        </div>
        <div className="row">
          <p className="account-modify-input">새 비밀번호 확인</p>
          <MyInfoInput
            type="password"
            formType="password"
            setState={setInputConfirmPassword}
          />
        </div>
        <div className="profile-form-submit-button-wrapper">
          <MyInfoButton
            width="85px"
            height="28px"
            text="비밀번호 변경"
            isActive={activator()}
            fontSize="13px"
          />
        </div>
      </div>
    </div>
  );
}

export default AccountModifyForm;
