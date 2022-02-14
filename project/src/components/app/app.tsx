import Header from '../header/header';
import MainScreen from '../main-screen/main-screen';
import AuthScreen from '../auth-screen/auth-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';

export const CurrentLocation = {
  MAIN: 'MAIN',
  LOGIN: 'LOGIN',
  FAVORITES: 'FAVORITES',
};

type appProps = {
  currentLocation: string,
  userEmail: string,
}

function App({currentLocation, userEmail}: appProps): JSX.Element {
  const isLoginScreen = CurrentLocation.LOGIN === currentLocation;

  switch (currentLocation) {
    case CurrentLocation.LOGIN:
      return (
        <div className="page page--gray page--login">
          <Header userEmail={userEmail} isLoginScreen={isLoginScreen}/>
          <main className="page__main page__main--login">
            <div className="page__login-container container">
              <AuthScreen />
            </div>
          </main>
        </div>
      );

    case CurrentLocation.FAVORITES:
      return (
        <div className="page">
          <Header userEmail={userEmail} isLoginScreen={isLoginScreen}/>
          <main className="page__main page__main--favorites">
            <FavoritesScreen />
          </main>
        </div>
      );

    default:
      return (
        <div className="page page--gray page--main">
          <Header userEmail={userEmail} isLoginScreen={isLoginScreen}/>
          <main className="page__main page__main--index">
            <MainScreen/>
          </main>
        </div>
      );
  }
}

export default App;
