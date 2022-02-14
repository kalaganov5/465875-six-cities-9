import Header from '../header/header';
import MainScreen from '../main-screen/main-screen';
import AuthScreen from '../auth-screen/auth-screen';

export const CurrentLocation = {
  MAIN: 'MAIN',
  LOGIN: 'LOGIN',
};

type appProps = {
  currentLocation: string,
  userEmail: string,
}

function App({currentLocation, userEmail}: appProps): JSX.Element {
  // eslint-disable-next-line no-console
  console.log(currentLocation);
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
    default:
      return (
        <div className="page page--gray page--main">
          <Header userEmail={userEmail} isLoginScreen={isLoginScreen}/>
          <MainScreen/>
        </div>
      );
  }
}

export default App;
