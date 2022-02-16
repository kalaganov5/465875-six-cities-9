import CitiesMenu from './cities-menu/cities-menu';
import Offers from './offers/offers';

function MainScreen(): JSX.Element {
  return (
    <>
      <h1 className="visually-hidden">Cities</h1>
      <CitiesMenu />
      <Offers />
    </>
  );
}

export default MainScreen;
