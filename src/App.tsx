import './index.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components/macro';

import Navbar from './components/navbar';
import Login from './pages/Login/index';

import LoadingSpinner from 'components/LoadingSpinner/LoadingSpinner';
import Main from 'components/main/Main';
import MyInfoForm from 'components/myInfo/myInfoForm';
import MyPage from 'components/myPage/MyPage';
import SearchForm from 'components/navbar/SearchForm';
import SignUp from 'pages/SignUp';
import { useAppSelector } from 'store/hooks';
import devices from 'styles/device';

function App() {
  const loading = useAppSelector((state) => state.loading);
  return (
    <BrowserRouter>
      <MainWrapper>
        <Navbar />
        {loading.isLoading && <LoadingSpinner />}
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/:searchId" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/search" element={<SearchForm />} />
          <Route path="/myPage" element={<MyPage />} />
          <Route path="/profileModify" element={<MyInfoForm />} />
          <Route path="/findAccount" element={<MyInfoForm />} />
        </Routes>
      </MainWrapper>
    </BrowserRouter>
  );
}

const MainWrapper = styled.div.attrs({ className: 'main-wrapper' })`
  width: 95%;
  margin: auto;

  @media ${devices.mobileM} {
    width: 95%;
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

export default App;
