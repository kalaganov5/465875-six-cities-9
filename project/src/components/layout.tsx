import {Outlet} from 'react-router-dom';
import Header from 'components/header/header';
import {appClassName, AppRoute} from 'const';

type layoutProps = {
  userEmail: string
}

function Layout ({userEmail}:layoutProps):JSX.Element {
  const reProperty = /\/offer\/?$/;
  const rePropertyWithId = /\/offer\/[0-9]{1,}/;
  let location = window.location.pathname;

  if (location.match(rePropertyWithId)) {
    // if offer location correct
    location = AppRoute.Property;
  } else if (location.match(reProperty)) {
    // if offer id empty, set class as main page
    location = AppRoute.Root;
  }

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
