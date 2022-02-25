import {Link} from 'react-router-dom';
import {AppRoute} from 'const';
import clsx from 'clsx';

type CityItemTypes = {
  city: string,
  isActive: boolean,
}

function CityItem({city, isActive}: CityItemTypes): JSX.Element {
  return (
    <li className="locations__item">
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
