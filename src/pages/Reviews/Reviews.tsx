import ClientsSlider from "./components/clientsSlider";
import Feedback from "./components/feedback";
import ReviewsBlocks from "./components/reviewsBlocks";

export default function Reviews() {
  return (
    <main>
      <div id="reviews-page-wrapper">
        <aside id="reviews-page-clients-slider-wrapper">
          <p className="reviews-page-title">Наши клиенты</p>
          <ClientsSlider />
        </aside>
        <aside id="reviews-page-blocks">
          <p className="reviews-page-title">Отзывы</p>
          <ReviewsBlocks />
        </aside>
        <Feedback />
      </div>
    </main>
  );
}
