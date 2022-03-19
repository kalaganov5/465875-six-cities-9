import ReviewItem from 'components/review-item/review-item';
import {Reviews as ReviewsTypes} from 'types/app';

type ReviewsProps = {
  reviews: ReviewsTypes,
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
