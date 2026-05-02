import ReviewImage from "../../../static/images/review-image.png";
import Statistic from "../../../static/images/review-statistic.png";
import QRCode from "../../../static/images/qr-code.png";

export default function Feedback() {
  return (
    <div id="feedback-wrapper">
      <aside id="feeback-inner-wrapper">
        <section id="leave-feedback-wrapper">
          <p className="leave-feedback-title">Оставить свой отзыв</p>
          <p className="leave-feedback-text">
            <b className="leave-feedback-special-text">Отсканируйте qr код </b>и
            поделитесь опытом сотрудничества с нами!
          </p>
          <div id="feedback-infographics-wrapper">
            <img
              src={Statistic}
              alt="Положительный рост компании"
              className="feedback-infographic-image"
            />
            <img
              src={QRCode}
              alt="QR код"
              className="feedback-infographic-image"
            />
          </div>
        </section>
        <img
          src={ReviewImage}
          alt="Фото работников"
          className="feedback-image"
        />
      </aside>
    </div>
  );
}
