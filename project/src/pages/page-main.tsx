import CitiesMenu from 'components/cities-menu/cities-menu';
import Offers from 'components/offers/offers';
import {useSearchParams} from 'react-router-dom';
import {cities} from 'const';

function PageMain(): JSX.Element {
  const [searchParams] = useSearchParams();

  const cityParam:string = searchParams.get('city') || '';
  const isCityCorrect = cities.some((city) => city.toLowerCase() === cityParam.toLowerCase());

  return (
    <>
      <h1 className="visually-hidden">Cities</h1>
      <CitiesMenu currentCity={isCityCorrect ? cityParam : cities[0]} />
      <Offers />
    </>
  );
}

export default PageMain;
