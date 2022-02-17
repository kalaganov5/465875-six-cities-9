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
            <a className="header__nav-link header__nav-link--profile" href="/">
              <div className="header__avatar-wrapper user__avatar-wrapper">
              </div>
              <span className="header__user-name user__name">{userEmail}</span>
            </a>
          </li> : ''}

        <li className="header__nav-item">
          <a className="header__nav-link" href="/">
            <span className="header__signout">{isAuth ? 'Sign out' : 'Sign in'}</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default AuthMenu;
