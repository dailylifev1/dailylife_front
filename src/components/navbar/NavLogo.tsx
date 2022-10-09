import { Link } from 'react-router-dom';

import { postActions } from 'reducers/post';
import { updateSearchedKeyword } from 'reducers/searchResult';
import { useAppDispatch, useAppSelector } from 'store/hooks';

function NavLogo() {
  const store = useAppSelector((state) => state.post);
  const dispatch = useAppDispatch();
  return (
    <div className="nav-header">
      <button
        className="nav-title"
        onClick={() => {
          dispatch(postActions.updateIsLogoClicked(!store.isLogoClicked));
          dispatch(updateSearchedKeyword(''));
        }}
        type="button"
      >
        <Link to="/">
          <img
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            src={`${process.env.PUBLIC_URL}/assets/logo.png`}
            alt="mainLogo"
          />
        </Link>
      </button>
    </div>
  );
}

export default NavLogo;
