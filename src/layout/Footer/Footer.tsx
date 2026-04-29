import { NavLink } from "react-router-dom";
import { NavigationList } from "../../lists/Navigation";

export default function Footer() {
  return (
    <footer>
      <section>
        <div></div>
        <nav id="footer-navigation-wrapper">
          {NavigationList.map((item) => (
            <NavLink
              key={item.id}
              to={item.url}
              className={({ isActive }) =>
                `footer-navigation-element ${isActive ? "active" : ""}`
              }
            >
              {item.title}
            </NavLink>
          ))}
        </nav>
      </section>
      <section>
        <a href="https://t.me/dmitrieshkin" id="dmitrieshkin">
          Coded by Дмитриешкин
        </a>
        <p id="lith">Designed by Lith</p>
      </section>
    </footer>
  );
}
