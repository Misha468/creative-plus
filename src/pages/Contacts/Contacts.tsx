import { ContactsList } from "../../lists/Contacts";
import MapComponent from "./components/Map";

export default function Contacts() {
  return (
    <main>
      <aside id="contact-page-wrapper">
        <p className="contacts-page-title">Всегда на связи!</p>
        <section className="contacts-info-page-wrapper">
          {ContactsList.map(
            (contact) =>
              contact.pageVisible && (
                <div key={contact.id} className="contacts-info-page-element">
                  <p className="contacts-info-page-title">{contact.title}</p>
                  <a className="contacts-info-page-link" href={contact.url}>
                    {contact.text}
                  </a>
                </div>
              ),
          )}
        </section>
        <MapComponent />
      </aside>
    </main>
  );
}
