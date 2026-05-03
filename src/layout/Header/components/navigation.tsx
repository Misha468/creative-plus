import { NavLink } from "react-router-dom";
import { NavigationList } from "../../../lists/Navigation";
import Logo from "../../../static/icons/black-logo.png";
export default function Navigation() {
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
      <section id="header-navigation-menu">
        {NavigationList.map((item) => (
          <NavLink
            key={item.id}
            to={item.url}
            className={({ isActive }) =>
              `header-navigation-element ${isActive ? "active" : ""}`
            }
          >
            {item.title}
          </NavLink>
        ))}
      </section>
      <section
        id="header-phone-wrapper"
        onClick={() => copyToClipboard("+74842751906")}
      >
        <p id="header-phone-link">+7 (4842) 75-19-06</p>
      </section>
    </aside>
  );
}
