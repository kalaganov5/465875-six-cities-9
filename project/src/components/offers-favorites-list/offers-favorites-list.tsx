import {Offers} from 'types/app';
import OffersFavoritesItem from 'components/offers-favorites-item/offers-favorites-item';

type OffersFavoritesListProps = {
  offers: Offers,
}

function OffersFavoritesList({offers}: OffersFavoritesListProps): JSX.Element {
  return (
    <ul className="favorites__list">
      <OffersFavoritesItem offers={offers}/>
    </ul>
  );
}

export default OffersFavoritesList;
