import CitiesMenu from './cities-menu/cities-menu';
import Offers from './offers/offers';

function PageMain(): JSX.Element {
  return (
    <>
      <h1 className="visually-hidden">Cities</h1>
      <CitiesMenu />
      <Offers />
    </>
  );
}

export default PageMain;
