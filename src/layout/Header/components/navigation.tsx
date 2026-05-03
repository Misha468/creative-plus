import { NavLink } from "react-router-dom";
import { NavigationList } from "../../../lists/Navigation";
import Logo from "../../../static/icons/black-logo.png";
import PhoneIcon from "../../../static/icons/white-phone-icon.png";
import MenuArrow from "../../../static/icons/arrow-right.png";
import { useState } from "react";
export default function Navigation() {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      alert("Номер телефона успешно скопирован!");
    } catch (err) {
      console.error("Ошибка копирования: ", err);
    }
  };
  return (
    <aside id="header-navigation-wrapper">
      <section id="logo-wrapper">
        <img src={Logo} alt="Креатив+ - рекламное агенство" id="logo-image" />
      </section>
      <section
        id="header-navigation-menu"
        className={`${isVisible ? "nav-menu-visible" : ""}`}
      >
        {NavigationList.map((item) => (
          <NavLink
            key={item.id}
            to={item.url}
            className={({ isActive }) =>
              `header-navigation-element ${isActive ? "active" : ""}`
            }
            onClick={() => setIsVisible(false)}
          >
            {item.title}
          </NavLink>
        ))}
      </section>
      <section id="header-phone-wrapper">
        <p
          id="header-phone-link"
          onClick={() => copyToClipboard("+74842751906")}
        >
          +7 (4842) 75-19-06
        </p>
        <div
          id="header-phone-icon-wrapper"
          onClick={() => copyToClipboard("+74842751906")}
        >
          <img src={PhoneIcon} alt="Иконка телефона" id="phone-icon-image" />
        </div>
        <div
          id="header-navigation-button"
          onClick={() => setIsVisible(!isVisible)}
          className={`${isVisible ? "nav-rotaded" : ""}`}
        >
          <img src={MenuArrow} alt="Кнопка менюшки" />
        </div>
      </section>
    </aside>
  );
}
