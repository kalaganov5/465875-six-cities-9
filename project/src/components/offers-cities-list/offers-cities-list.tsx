import {useState} from 'react';
import {Offers as OffersType} from 'types/app';
import OfferItem from '../offer-item/offer-item';
import { OFFER_CARD} from 'const';

import FormSorting from 'components/form-sorting/form-sorting';
import CitiesMap from 'components/cities-map/cities-map';

type OffersProps = {
  offers: OffersType,
}

function OffersCitiesList({offers}: OffersProps): JSX.Element {
  const [, setActiveOffer] = useState<number>(-1);
  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">312 places to stay in Amsterdam</b>
          <FormSorting/>
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
        <CitiesMap/>
      </div>
    </div>
  );
}

export default OffersCitiesList;
