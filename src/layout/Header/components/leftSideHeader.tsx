import { NavLink } from "react-router-dom";
import ArrorIcon from "../../../static/icons/arrow-right.png";

export default function LeftSideHeader() {
  return (
    <section id="header-inner-background-left-side">
      <p className="header-thesis-title">
        От идеи до воплощения — один звонок в наш офис!
      </p>
      <p className="header-thesis-text">
        Оригинальные решения в полиграфии, наружной рекламе и сувенирной
        продукции
      </p>
      <div id="header-thesis-buttons-wrapper">
        <NavLink to={"/контакты"} className="buttons" id="to-contact-button">
          Контакты
          <img src={ArrorIcon} alt="Иконка стрелочки" />
        </NavLink>
        <NavLink to={"/портфолио"} className="links" id="underlined-link">
          Посмотреть портфолио
        </NavLink>
      </div>
    </section>
  );
}
