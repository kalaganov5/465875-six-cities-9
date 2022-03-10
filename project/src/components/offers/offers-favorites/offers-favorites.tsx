import {Offers as OffersType, citiesTypes} from 'types/app';
import {Link} from 'react-router-dom';
import {AppRoute} from 'const';
import OfferItem from '../offer-item/offer-item';

type OffersPlaceItemsProps = {
  currentCity: string,
  offers: OffersType,
}

function OffersPlaceItems({currentCity, offers}: OffersPlaceItemsProps) {
  const offersByCurrentCity = offers.filter((place) => (place.city.name === currentCity));

  return (
    <>
      {offersByCurrentCity.map(
        (offer) => (
          <OfferItem  offer={offer} key={offer.id} offerType={'favorites'} />
        ),
      )}
    </>
  );
}

type OffersLocationItemsProps = {
  uniqueCity: citiesTypes,
  offers: OffersType,
}

function OffersLocationItems({uniqueCity, offers}: OffersLocationItemsProps) {
  return (
    <>
      {uniqueCity.map((city) => (
        <li className="favorites__locations-items" key = {city}>
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to={AppRoute.Root}>
                <span>{city}</span>
              </Link>
            </div>
          </div>
          <div className="favorites__places">
            <OffersPlaceItems currentCity = {city} offers = {offers}/>
          </div>
        </li>
      ))}
    </>
  );
}

type OffersProps = {
  offers: OffersType,
}

function OffersFavorites({offers}: OffersProps) {
  const uniqueCity:citiesTypes = [];
  offers.forEach((item) => {
    const city = item.city.name;
    if (!uniqueCity.includes(city)) {
      uniqueCity.push(city);
    }
  });

  return (
    <OffersLocationItems uniqueCity = {uniqueCity} offers = {offers} />
  );
}

export default OffersFavorites;
