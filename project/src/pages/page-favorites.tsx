import OffersFavoritesList from 'components/offers-favorites-list/offers-favorites-list';
import {Offers as OffersType} from 'types/app';
import clsx from 'clsx';

type OffersProps = {
  offers: OffersType;
}

function PageFavorites({offers}: OffersProps): JSX.Element {
  const isNothingFavorites = offers.length === 0;

  return (
    <div className={clsx('page__favorites-container', 'container')}>
      <section className={clsx(['favorites', {'favorites--empty' : isNothingFavorites}])}>
        <h1 className={
          clsx(['favorites__title', { 'visually-hidden': isNothingFavorites}])
        }
        >{isNothingFavorites ? 'Favorites (empty)' : 'Saved listing'}
        </h1>
        {isNothingFavorites ? (
          <div className="favorites__status-wrapper">
            <b className="favorites__status">Nothing yet saved.</b>
            <p className="favorites__status-description">Save properties to narrow down search or plan your future trips.</p>
          </div>
        ) : (
          <OffersFavoritesList offers={offers}/>
        )}
      </section>
    </div>
  );
}

export default PageFavorites;
