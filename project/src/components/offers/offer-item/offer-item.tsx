import {ratingToCss} from 'utils/utils';
import {Link} from 'react-router-dom';
import {AppRoute, OFFER_CARD} from 'const';
import {Offer} from 'types/app';
import clsx from 'clsx';

type OfferItemProps = {
  offerType: string,
  offer: Offer;
  onActivateOffer?: () => void,
  onDeactivateOffer?: () => void,
}

function OfferItem({offerType, offer, onActivateOffer, onDeactivateOffer}: OfferItemProps): JSX.Element {

  const {id, price, previewImage, isFavorite, rating, title, type, isPremium} = offer;
  const isFavoriteClass = isFavorite ? 'place-card__bookmark-button--active' : '';

  const isOfferFavorite = offerType === OFFER_CARD.favorites;

  const isPremiumMarkup = isPremium ? (
    <div className="place-card__mark">
      <span>Premium</span>
    </div>
  ) : '';

  return (
    <article
      className = {clsx(`${isOfferFavorite ? 'favorites__card' : 'cities__place-card'}`, 'place-card')}
      onMouseEnter = {onActivateOffer}
      onMouseLeave = {onDeactivateOffer}
    >
      {isPremiumMarkup}
      <div className={clsx(`${offerType}__image-wrapper`, 'place-card__image-wrapper')}>
        <Link to={`${AppRoute.Property}/${id}`}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="" />
        </Link>
      </div>
      <div className={clsx(`${isOfferFavorite ? 'favorites__card-info': ''}`,'place-card__info')}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={clsx('place-card__bookmark-button', isFavoriteClass, 'button')} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={ratingToCss(rating)}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Property}/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default OfferItem;

