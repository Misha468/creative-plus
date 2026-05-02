import { Link } from "react-router-dom";
import { NavigationList } from "../../../lists/Navigation";
export default function FooterNavigation() {
  return (
    <nav id="footer-navigation-wrapper">
      {NavigationList.map((item) => (
        <Link key={item.id} to={item.url} className="footer-navigation-element">
          {item.title}
        </Link>
      ))}
    </nav>
  );
}
