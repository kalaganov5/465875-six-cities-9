import {Review, Reviews as ReviewsTypes} from 'types/app';
import {ratingToCss} from 'utils/utils';

type ReviewsProps = {
  reviews: ReviewsTypes,
}
type ReviewTypes = {
  review: Review,
}
function ReviewItem ({review}: ReviewTypes) {
  const {comments, user, rating} = review;
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={`img/${user.avatar}`} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={ratingToCss(rating)}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comments}
        </p>
        <time className="reviews__time" dateTime="2019-04-24">April 2019</time>
      </div>
    </li>
  );
}

function Reviews ({reviews}: ReviewsProps) {
  return (
    <ul className="reviews__list">
      {reviews.map(
        (reviewItem) => (
          <ReviewItem key = {reviewItem.id} review = {reviewItem} />
        ))}
    </ul>
  );
}

export default Reviews;
