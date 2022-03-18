import {Offers, citiesTypes} from 'types/app';
import {Link} from 'react-router-dom';
import {AppRoute, OFFER_CARD} from 'const';
import OfferItem from 'components/offer-item/offer-item';

interface OffersPlaceItemsProps {
  currentCity: string,
  offers: Offers,
}

function OffersPlaceItems({currentCity, offers}: OffersPlaceItemsProps) {
  const offersByCurrentCity = offers.filter((place) => (place.city.name === currentCity));

  return (
    <>
      {offersByCurrentCity.map(
        (offer) => (
          <OfferItem  offer={offer} key={offer.id} offerType={OFFER_CARD.favorites} />
        ),
      )}
    </>
  );
}

type OffersLocationItemsProps = {
  uniqueCity: citiesTypes,
  offers: Offers,
}

function OffersLocationItems({uniqueCity, offers}: OffersLocationItemsProps) {
  return (
    <>
      {uniqueCity.map((city) => (
        <li className="favorites__locations-items" key = {city}>
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              {/* Временно `${AppRoute.Root}?city=${city.toLocaleLowerCase()}` доработаю */}
              <Link className="locations__item-link" to={`${AppRoute.Root}?city=${city.toLocaleLowerCase()}`}>
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
  offers: Offers,
}

function OffersFavoritesItem({offers}: OffersProps) {
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

export default OffersFavoritesItem;
