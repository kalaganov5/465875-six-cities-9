import {Outlet, useLocation} from 'react-router-dom';
import Header from './header/header';
import {appClassName} from 'const';

type layoutProps = {
  userEmail: string
}

function Layout ({userEmail}:layoutProps):JSX.Element {
  const location = useLocation().pathname;

  return (
    <div className={`page ${appClassName[location].page}`}>
      <Header userEmail={userEmail}/>
      <main className={`page__main ${appClassName[location].main}`}>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
