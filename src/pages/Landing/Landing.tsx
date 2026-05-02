import { ValuesList } from "../../lists/Values";
import AboutCompany from "./components/AboutCompany";
import InfiniteWordsCarousel from "./components/Carousel";
import ThesisBackground from "../../static/images/thesis-background.png";
import Logo from "../../static/icons/black-logo.png";
import ArrorIcon from "../../static/icons/arrow-right.png";
import { NavLink } from "react-router-dom";

export default function Landing() {
  return (
    <main>
      <InfiniteWordsCarousel />
      <AboutCompany />
      <aside id="our-values-wrapper">
        <p className="our-values-wrapper-title">Наши ценности</p>
        <div id="our-values-list">
          {ValuesList.map((value) => (
            <div className="our-values-element" key={value.id}>
              <img
                src={value.image}
                alt={value.title}
                className="our-values-image"
              />
              <p className="our-values-title">{value.title}</p>
            </div>
          ))}
        </div>
      </aside>
      <aside id="thesis-block-wrapper">
        <section id="thesis-info-block">
          <img src={Logo} alt="Логотип | Logo" id="thesis-info-block-logo" />
          <p className="thesis-info-text">
            Воплощаем ваши идеи
            <b className="thesis-info-special-text"> в реальность!</b>
          </p>
          <NavLink to={"/контакты"} className="buttons" id="to-contact-button">
            Контакты
            <img src={ArrorIcon} alt="Иконка стрелочки" />
          </NavLink>
        </section>
        <img src={ThesisBackground} alt="Задний фон" id="thesis-block-image" />
      </aside>
    </main>
  );
}
