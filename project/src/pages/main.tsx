import CitiesMenu from 'components/cities-menu/cities-menu';
import Offers from 'components/offers/offers';

function Main(): JSX.Element {
  return (
    <>
      <h1 className="visually-hidden">Cities</h1>
      <CitiesMenu />
      <Offers />
    </>
  );
}

export default Main;
