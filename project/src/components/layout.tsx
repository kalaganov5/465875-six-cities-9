import {Outlet, useLocation} from 'react-router-dom';
import Header from 'components/header/header';
import {appClassName, AppRoute} from 'const';
import clsx from 'clsx';
import {Offers} from 'types/app';

type layoutProps = {
  userEmail: string,
  offersFavorite: Offers,
}

function Layout ({userEmail, offersFavorite}:layoutProps):JSX.Element {
  const reProperty = /\/offer\/?$/;
  const rePropertyWithId = /\/offer\/[0-9]{1,}/;
  let location = useLocation().pathname;
  let pageClassName;
  let mainClassName;

  if (location.match(rePropertyWithId)) {
    // if offer location correct
    location = AppRoute.Property;
  } else if (location.match(reProperty)) {
    // if offer id empty, set class as main page
    location = AppRoute.Root;
  }

  pageClassName = appClassName[location].page.default;
  mainClassName = appClassName[location].main.default;

  if (offersFavorite.length === 0 && location === AppRoute.Favorites) {
    pageClassName = appClassName[location].page.empty;
    mainClassName = appClassName[location].main.empty;
  }

  return (
    <div className={clsx('page', pageClassName)}>
      <Header userEmail={userEmail}/>
      <main className={clsx('page__main', mainClassName)} >
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
