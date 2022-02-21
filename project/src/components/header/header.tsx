import {Link} from 'react-router-dom';
import AuthMenu from './auth-menu/auth-menu';
import {AppRoute} from 'const';

type headerProps = {
  userEmail: string
}

function Header({userEmail}: headerProps): JSX.Element {
  const isLoginScreen = AppRoute.Login === window.location.pathname;

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link to={AppRoute.Root} className="header__logo-link header__logo-link--active">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </Link>
          </div>
          {isLoginScreen ? null : <AuthMenu userEmail={userEmail} />}
        </div>
      </div>
    </header>
  );
}

export default Header;
