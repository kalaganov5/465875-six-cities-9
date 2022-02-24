import {cities} from 'const';
import CityItem from './city-item/city-item';

type CitiesType = {
  currentCity: string | null,
}

function CitiesMenu({currentCity}: CitiesType): JSX.Element {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((city) => (
            <CityItem key={city} city={city} isActive={
              (currentCity || 'paris') === city.toLocaleLowerCase()
            }
            />
          ))}
        </ul>
      </section>
    </div>
  );
}

export default CitiesMenu;
