import {useState} from 'react';
import {Offers as OffersType} from 'types/app';
import OfferItem from './offer-item/offer-item';
import {AppRoute, OFFER_CARD} from 'const';
import OffersFavorites from './offers-favorites/offers-favorites';

type OffersProps = {
  route: string,
  offers: OffersType,
}

function Offers({route, offers}: OffersProps): JSX.Element {
  const [, setActiveOffer] = useState<number>(-1);
  switch(route) {
    case AppRoute.Favorites:
      return (
        <ul className="favorites__list">
          <OffersFavorites offers={offers}/>
        </ul>
      );
    default:
      return (
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">312 places to stay in Amsterdam</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>
              <div className="cities__places-list places__list tabs__content">
                {offers.map((offer) => (
                  <OfferItem
                    offerType = {OFFER_CARD.cities}
                    key = {offer.id}
                    offer = {offer}
                    onActivateOffer = {
                      () => {
                        // eslint-disable-next-line no-console
                        console.log('hover', offer.id);
                        return setActiveOffer(offer.id);
                      }
                    }
                    onDeactivateOffer={
                      () => {
                        // eslint-disable-next-line no-console
                        console.log('leave hover', offer.id);
                        return setActiveOffer(-1);
                      }
                    }
                  />),
                )}
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map"></section>
            </div>
          </div>
        </div>
      );
  }
}

export default Offers;
