import {Route, BrowserRouter, Routes} from 'react-router-dom';
import Layout from 'components/layout';
import PrivateRoute from 'components/private-route';
import PageMain from 'pages/page-main';
import PageAuth from 'pages/page-auth';
import PageFavorites from 'pages/page-favorites';
import PageProperty from 'pages/page-property';
import PageNotFound from 'pages/page-not-found';
import {AppRoute} from 'const';
import {Offers} from '../../types/app';

type appProps = {
  userEmail: string,
  offers: Offers,
}

function App({userEmail, offers}: appProps): JSX.Element {

  // eslint-disable-next-line no-console
  console.log(offers);
  const isAuth = userEmail !== '';
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout userEmail={userEmail}/>}>
          <Route index element={<PageMain offers = {offers} />} />
          <Route path={AppRoute.Login} element={<PageAuth/>} />
          <Route path={AppRoute.Property} >
            <Route index  element={<PageNotFound />} />
            <Route path={AppRoute.PropertyId} element={<PageProperty />} />
          </Route>
          <Route path={AppRoute.Favorites} element={<PrivateRoute isAuth={isAuth}/>} >
            <Route path={AppRoute.Favorites}  element={<PageFavorites />} />
          </Route>
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
