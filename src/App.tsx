import './index.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from './components/navbar';
import Login from './pages/Login/index';

import LoadingSpinner from 'components/LoadingSpinner/LoadingSpinner';
import Main from 'components/main/Main';
import MyInfoForm from 'components/myInfo/myInfoForm';
import MyPage from 'components/myPage/MyPage';
import SearchForm from 'components/navbar/SearchForm';
import SignUp from 'pages/SignUp';
import { useAppSelector } from 'store/hooks';
import MainWrapper from 'styles/app.styled';

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
export default App;
