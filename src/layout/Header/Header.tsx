import Navigation from "./components/navigation";
import HeaderBackground from "../../static/images/landing-background.png";
import StatisticIcon from "../../static/images/statistic.png";
import ArrorIcon from "../../static/icons/arrow-right.png";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <Navigation />
      {/* Header background */}
      <aside id="header-background-wrapper">
        <img
          src={HeaderBackground}
          alt="Задний фон шапки сайта"
          id="header-background-image"
        />
        <div id="header-inner-background">
          <section id="header-inner-background-left-side">
            <p className="header-thesis-title">
              От идеи до воплощения — один звонок в наш офис!
            </p>
            <p className="header-thesis-text">
              Оригинальные решения в полиграфии, наружной рекламе и сувенирной
              продукции
            </p>
            <div id="header-thesis-buttons-wrapper">
              <NavLink
                to={"/контакты"}
                className="buttons"
                id="to-contact-button"
              >
                Контакты
                <img src={ArrorIcon} alt="Иконка стрелочки" />
              </NavLink>
              <NavLink to={"/портфолио"} className="links" id="underlined-link">
                Посмотреть портфолио
              </NavLink>
            </div>
          </section>
          <section id="header-inner-background-right-side">
            <img
              src={StatisticIcon}
              alt="Иконка статистики"
              id="header-statistic-icon"
            />
            <div id="header-company-fact">
              <p className="company-fact-title">25+</p>
              <p className="company-fact-text">
                Столько лет мы радуем наших клиентов качественной работой
              </p>
              <article id="line-wrapper">
                <div id="black-line"></div>
                <div id="gray-line"></div>
              </article>
            </div>
          </section>
        </div>
      </aside>
    </header>
  );
}
