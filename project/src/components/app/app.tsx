import {Route, BrowserRouter, Routes} from 'react-router-dom';
import Layout from '../layout';
import Main from 'pages/main';
import Auth from 'pages/auth';
import Favorites from 'pages/favorites';
import Property from 'pages/property';
import NotFound from 'pages/not-found';
import {AppRoute} from 'const';

type appProps = {
  userEmail: string,
}

function App({userEmail}: appProps): JSX.Element {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout userEmail={userEmail}/>}>
          <Route index element={<Main />} />
          <Route path={AppRoute.Login} element={<Auth/>} />
          <Route path={AppRoute.Property} element={<Property />} />
          <Route path={AppRoute.Favorites} element={<Favorites />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
