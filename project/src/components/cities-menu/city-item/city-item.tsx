import {Link} from 'react-router-dom';
import {AppRoute} from 'const';
import clsx from 'clsx';

type CityItemTypes = {
  key: string,
  city: string,
  isActive: boolean,
}

function CityItem({key, city, isActive}: CityItemTypes): JSX.Element {
  return (
    <li key={key} className="locations__item">
      <Link className={clsx(
        'locations__item-link',
        'tabs__item',
        {'tabs__item--active': isActive},
      )} to={`${AppRoute.Root}?city=${city.toLocaleLowerCase()}`}
      >
        <span>{city}</span>
      </Link>
    </li>
  );
}

export default CityItem;
