import {Link} from 'react-router-dom';
import {AppRoute} from 'const';

type menuProps = {
  userEmail: string,
}

function AuthMenu({userEmail}: menuProps): JSX.Element {
  const isAuth = userEmail !== '';

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        {isAuth ?
          <li className="header__nav-item user">
            <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
              <div className="header__avatar-wrapper user__avatar-wrapper">
              </div>
              <span className="header__user-name user__name">{userEmail}</span>
            </Link>
          </li> : null}

        <li className="header__nav-item">
          <Link className="header__nav-link" to={AppRoute.Login}>
            <span className="header__signout">{isAuth ? 'Sign out' : 'Sign in'}</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default AuthMenu;
