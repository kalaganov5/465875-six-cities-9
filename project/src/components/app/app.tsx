import PageMain from '../page-main/page-main';

type appProps = {
  userEmail: string,
}

function App({userEmail}: appProps): JSX.Element {
  return (
    <PageMain
      userEmail={userEmail}
    />
  );
}

export default App;
