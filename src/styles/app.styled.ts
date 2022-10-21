import styled from 'styled-components';

import devices from './device';

const MainWrapper = styled.div.attrs({ className: 'main-wrapper' })`
  width: 95%;
  margin: auto;

  @media ${devices.mobileM} {
    widrth: 95%;
    .searchBar {
      width: 100%;
    }
  }

  @media ${devices.tablet} {
    width: 70%;
    .searchBar {
      width: 110%;
    }
  }

  @media ${devices.laptopL} {
    width: 55%;
  }
`;

export default MainWrapper;
