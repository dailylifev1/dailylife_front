import './index.css';
import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from './pages/Login/index';
import Navbar from './components/navbar';
import SearchForm from 'components/navbar/searching/searchForm/SearchForm';
import Main from 'components/main/Main';
import SignUp from 'components/signUp/SignUp';
import MyInfo from 'components/myInfo/MyInfo';
import MyInfoForm from 'components/myInfo/myInfoForm';
function App() {

  useEffect(() => {
    console.log('rendered App');
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/search" element={<SearchForm />} />
        <Route path="/myInfo" element={<MyInfo />} />
        <Route path='/profileModify' element={<MyInfoForm />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
