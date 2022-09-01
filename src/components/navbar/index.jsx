import { Link } from 'react-router-dom';

import PostRender from './navlink/PostRender';
import Searching from './searching/Searching';

import './index.css';
import NavLogo from './navLogo/navLogo';

function Navbar() {
  const accessToken = localStorage.getItem('accessToken');

  return (
    <div className="nav">
      <NavLogo />
      <Searching />
      <div className="nav-links">
        <PostRender />

        {accessToken ? <Link to="/myInfo" className="link link4" /> : <Link to="/login" className="link link4" />}
      </div>
    </div>
  );
}

export default Navbar;
