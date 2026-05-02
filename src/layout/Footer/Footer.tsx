import { useState } from "react";
import { ContactsList } from "../../lists/Contacts";
import { SocialsList } from "../../lists/Socials";
import FooterNavigation from "./components/footerNavigation";
import { Link } from "react-router-dom";

export default function Footer() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  return (
    <footer>
      <aside id="top-footer-part">
        <section id="top-footer-left-side">
          <p className="top-footer-left-side-title">Контакты</p>
          <div id="footer-contacts-wrapper">
            {ContactsList.map((contact) => (
              <div key={contact.id} className="footer-contact-element">
                <img
                  src={contact.icon}
                  alt={contact.title}
                  className={contact.styles}
                />
                <a className="footer-social-link" href={contact.url}>
                  {contact.text}
                </a>
              </div>
            ))}
          </div>
          <div id="footer-socials-wrapper">
            {SocialsList.map((social) => (
              <div
                key={social.id}
                className={`footer-social-element ${hoveredId === social.id ? "hovered" : ""}`}
                onMouseEnter={() => setHoveredId(social.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <img
                  src={social.icon}
                  alt={social.title}
                  className="footer-social-icon"
                />
                <div className="social-info-expand">
                  <Link to={social.url} className="social-text">
                    {social.url}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
        <FooterNavigation />
      </aside>
      {/* Authors */}
      <section id="authors-wrapper">
        <a href="https://t.me/dmitrieshkin" id="dmitrieshkin">
          Coded by Дмитриешкин
        </a>
        <p id="lith">Designed by Lith</p>
      </section>
    </footer>
  );
}
