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
    .card-text {
      bottom: 3.5vw;
    }
    .card-underInfo {
      bottom: 0.5vw;
    }
  }

  @media ${devices.tablet} {
    width: 70%;
    .searchBar {
      width: 110%;
    }
    .card-text {
      bottom: 2.4vw;
    }
  }

  @media ${devices.laptopL} {
    width: 55%;
  }
  .card-text {
    /* bottom: 3.5vw; */
  }
`;

export default MainWrapper;
