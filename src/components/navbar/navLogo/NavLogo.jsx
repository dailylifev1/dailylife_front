import { Link } from 'react-router-dom';

import MainLogoIcon from 'components/Icons/MainLogoIcon';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { postActions } from 'reducers/post';

function NavLogo() {
  const store = useAppSelector((state => state.post))
  const dispatch = useAppDispatch();
  return (
    <div className="nav-header">
      <button className="nav-title" onClick={() => {
        dispatch(postActions.updateIsLogoClicked(!store.isLogoClicked));
      }} type="button">
        <Link to="/">
          <MainLogoIcon />
        </Link>
      </button>
    </div>
  );
}

export default NavLogo;
