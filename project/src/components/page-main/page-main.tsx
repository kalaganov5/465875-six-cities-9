import Header from '../header/header';
import CitiesMenu from './cities-menu/cities-menu';
import Offers from './offers/offers';

type PageMainProps = {
  userEmail: string,
}

function PageMain({userEmail}: PageMainProps): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Header userEmail={userEmail}/>
      <h1 className="visually-hidden">Cities</h1>
      <CitiesMenu />
      <Offers />
    </div>
  );
}

export default PageMain;
