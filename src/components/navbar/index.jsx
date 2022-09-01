import { Link } from 'react-router-dom';

import PostRender from './navlink/PostRender';
import Searching from './searching/Searching';

import './index.css';

function Navbar() {
  const accessToken = localStorage.getItem('accessToken');

  return (
    <div className="nav">
      <div className="nav-header">
        <button className="nav-title" type="button">
          <Link to="/">
            <img className="logo" src="/assets/logo.png" alt="logo" />
          </Link>
        </button>
      </div>
      <div className="nav-searchBar">
        <Searching />
      </div>
      <div className="nav-links">
        <PostRender />

        {accessToken ? <Link to="/myInfo" className="link link4" /> : <Link to="/login" className="link link4" />}
      </div>
    </div>
  );
}

export default Navbar;
