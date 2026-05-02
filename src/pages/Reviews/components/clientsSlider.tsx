import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
// @ts-ignore
import "swiper/css";
import { ClientsList } from "../../../lists/Clients";

export default function ClientsSlider() {
  return (
    <aside id="clients-slider-wrapper">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        loop={true}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          800: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1400: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1601: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
        className="clients-swiper"
      >
        {ClientsList.map((slide) => (
          <SwiperSlide key={slide.id} className="slider-element">
            <img src={slide.logo} alt={slide.title} />
          </SwiperSlide>
        ))}
      </Swiper>
    </aside>
  );
}
