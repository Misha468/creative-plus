import { ReviewsList } from "../../../lists/Reviews";

export default function ReviewsBlocks() {
  return (
    <div id="reviews-blocks-wrapper">
      {ReviewsList.map((review) =>
        review.mirrored ? (
          <div key={review.id} className="review-block-mirrored">
            <div className="review-inner-block">
              <img src={review.image} alt="" className="review-block-image" />
              <div className="review-block-info">
                <p className="review-block-name">{review.name}</p>
                <p className="review-block-text">{review.text}</p>
              </div>
            </div>
          </div>
        ) : (
          <div key={review.id} className="review-block">
            <div className="review-inner-block">
              <img src={review.image} alt="" className="review-block-image" />
              <div className="review-block-info">
                <p className="review-block-name">{review.name}</p>
                <p className="review-block-text">{review.text}</p>
              </div>
            </div>
          </div>
        ),
      )}
    </div>
  );
}
