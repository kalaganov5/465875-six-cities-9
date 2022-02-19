import {Route, BrowserRouter, Routes} from 'react-router-dom';
import Layout from '../layout';
import PrivateRoute from '../private-route';
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
  const isAuth = userEmail !== '';
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout userEmail={userEmail}/>}>
          <Route index element={<Main />} />
          <Route path={AppRoute.Login} element={<Auth/>} />
          <Route path={AppRoute.Property} >
            <Route index  element={<NotFound />} />
            <Route path=':id' element={<Property />} />
          </Route>
          <Route path={AppRoute.Favorites}
            element={
              <PrivateRoute isAuth={isAuth}>
                <Favorites />
              </PrivateRoute>
            }
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
