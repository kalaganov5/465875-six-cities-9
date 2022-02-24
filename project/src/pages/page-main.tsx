import CitiesMenu from 'components/cities-menu/cities-menu';
import Offers from 'components/offers/offers';
import {useSearchParams} from 'react-router-dom';

function PageMain(): JSX.Element {
  const [searchParams] = useSearchParams();
  const currentCity = searchParams.get('city');

  return (
    <>
      <h1 className="visually-hidden">Cities</h1>
      <CitiesMenu currentCity={currentCity} />
      <Offers />
    </>
  );
}

export default PageMain;
