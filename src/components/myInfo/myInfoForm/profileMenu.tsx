import styled from 'styled-components';

import { TextObj } from '.';

import ProfileMenuItem from 'components/buttons/ProfileMenuItem';

function ProfileMenu({ textArr, setTextArr }) {
  return (
    <Wrapper>
      {textArr.map((item: TextObj) => (
        <ProfileMenuItem key={item.id} {...item} setTextArr={setTextArr} />
      ))}
    </Wrapper>
  );
}

export default ProfileMenu;

const Wrapper = styled.div.attrs({ className: 'profile-menu' })``;
