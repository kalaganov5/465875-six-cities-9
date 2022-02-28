import {Navigate, Outlet} from 'react-router-dom';
import {AppRoute} from 'const';

type PrivateRouteProps = {
  isAuth: boolean,
};

function PrivateRoute({isAuth}: PrivateRouteProps): JSX.Element {

  return isAuth ? <Outlet /> : <Navigate to={AppRoute.Login} />;
}

export default PrivateRoute;
