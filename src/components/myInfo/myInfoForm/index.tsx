import './accountManage.scss';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

import AccountModifyForm from './AccountModifyForm';
import ProfileMenu from './profileMenu';
import ProfileModifyForm from './profileModifyForm';

import devices from 'styles/device';

export interface TextObj {
  id: number;
  data: string;
  isActive?: boolean;
  path: string;
  description: string;
}

function MyInfoForm() {
  const location = useLocation();
  const [textArr, setTextArr] = useState<TextObj[]>([
    {
      id: 1,
      data: '프로필 편집',
      isActive: true,
      path: '/profileModify',
      description: '회원님의 프로필을 방문하는 사용자에게 표시되는 정보입니다.',
    },
    {
      id: 2,
      data: '계정 관리',
      path: '/findAccount',
      description: '회원님의 비밀번호 변경 및 계정 유형을 변경할 수 있습니다.',
    },
  ]);

  const handlePage = () => {
    switch (location.pathname) {
      case '/profileModify':
        return <ProfileModifyForm textArr={textArr} />;
      case '/findAccount':
        return <AccountModifyForm textArr={textArr} />;
      default:
        return null;
    }
  };
  return (
    <Wrapper>
      <ProfileMenu textArr={textArr} setTextArr={setTextArr} />
      <div className="form-body-container">{handlePage()}</div>
    </Wrapper>
  );
}

export default MyInfoForm;

const Wrapper = styled.div`
  display: grid;
  position: relative;
  top: 7vh;
  margin: auto;
  height: 600px;

  background: #ffffff;
  border: 1px solid #eaeaea;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.16);
  border-radius: 12px;
  @media ${devices.mobileS} {
    grid-template-columns: 2fr 8fr;
    width: 90%;
  }
  @media ${devices.tablet} {
    width: 100%;
  }
  @media ${devices.laptop} {
    grid-template-columns: 3fr 7fr;
    width: 740px;
  }
`;
