import {useState, ChangeEvent} from 'react';
import {ratingData} from 'const';

function FormReview ():JSX.Element {
  const [, setRating] = useState(0);
  const [review, setReview] = useState('');
  const [isRatingValid, setRatingValid] = useState(false);
  const [isReviewValid, setReviewValid] = useState(false);

  const reviewMinLength = 50;
  const reviewMaxLength = 300;

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {ratingData.map(
          (item) => (
            <>
              <input className="form__rating-input visually-hidden"
                name="rating" value={item.value}
                id={`${item.value}-stars`} type="radio"
                onChange={({ target }: ChangeEvent<HTMLInputElement>) => {
                  setRating(+target.value);
                  if (+target.value >= 1) {
                    setRatingValid(true);
                  } else {
                    setRatingValid(false);
                  }
                }}
              />
              <label htmlFor={`${item.value}-stars`} className="reviews__rating-label form__rating-label" title={item.name}>
                <svg className="form__star-image" width="37" height="33">
                  <use xlinkHref="#icon-star"></use>
                </svg>
              </label>
            </>
          ),
        )}

      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review"
        value={review}
        onChange={
          ({target}: ChangeEvent<HTMLTextAreaElement>) => {
            setReview(target.value);
            if (target.value.length >= reviewMinLength && target.value.length <= reviewMaxLength) {
              setReviewValid(true);
            } else {
              setReviewValid(false);
            }
          }
        }
        placeholder="Tell how was your stay, what you like and what can be improved"
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit"
          disabled = {
            !(isRatingValid && isReviewValid)
          }
        >Submit
        </button>
      </div>
    </form>
  );
}

export default FormReview;
