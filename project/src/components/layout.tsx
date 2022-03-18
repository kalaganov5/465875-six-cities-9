import {Outlet, useLocation} from 'react-router-dom';
import Header from 'components/header/header';
import {appClassName, AppRoute} from 'const';
import clsx from 'clsx';
import {Offers} from 'types/app';

type layoutProps = {
  userEmail: string,
  offersFavorites: Offers,
}

function Layout ({userEmail, offersFavorites}:layoutProps):JSX.Element {
  const reProperty = /\/offer\/?$/;
  const rePropertyWithId = /\/offer\/[0-9]{1,}/;
  const emptyOffersList = offersFavorites.length === 0;
  let location = useLocation().pathname;

  if (location.match(rePropertyWithId)) {
    // if offer location correct
    location = AppRoute.Property;
  } else if (location.match(reProperty)) {
    // if offer id empty, set class as main page
    location = AppRoute.Root;
  }

  return (
    <div className={
      clsx(['page', appClassName[location].page[emptyOffersList && (location === AppRoute.Favorites) ? 'empty' : 'default']])
    }
    >
      <Header userEmail={userEmail}/>
      <main className={
        clsx(['page__main',
          appClassName[location]
            .main[emptyOffersList && (location === AppRoute.Favorites) ? 'empty' : 'default'],
        ],
        )
      }
      >
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
