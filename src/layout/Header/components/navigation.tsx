import { NavLink } from "react-router-dom";
import { NavigationList } from "../../../lists/Navigation";
import Logo from "../../../static/icons/black-logo.png";
export default function Navigation() {
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
      <section id="header-phone-wrapper">
        <p id="header-phone-link">+7 (4842) 75-19-06</p>
      </section>
    </aside>
  );
}
