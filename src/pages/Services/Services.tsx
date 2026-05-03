import { ServicesList } from "../../lists/Services";
import AllServices from "./components/allServices";
import Faq from "./components/faq";

export default function Services() {
  return (
    <main>
      <div id="services-page-wrapper">
        <aside id="category-wrapper">
          <p className="services-page-title">Категории</p>
          <div id="category-list-wrapper">
            {ServicesList.map((category) => (
              <div className="category-list-element" key={category.id}>
                <img
                  src={category.image}
                  alt={category.type}
                  className="category-list-image"
                />
                <p className="category-list-title">{category.type}</p>
              </div>
            ))}
          </div>
        </aside>
        <aside id="services-list-wrapper">
          <p className="services-page-title">Все услуги</p>
          <AllServices />
        </aside>
        <aside id="faq-block-wrapper">
          <p className="services-page-title">FAQ</p>
          <Faq />
        </aside>
      </div>
    </main>
  );
}
