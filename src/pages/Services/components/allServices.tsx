import { ServicesList } from "../../../lists/Services";

export default function AllServices() {
  return (
    <section id="services-types-blocks-wrapper">
      {ServicesList.map((type) => (
        <div key={type.id} className="services-types-block">
          <p className="services-types-block-title">{type.type}</p>
          <ul className="services-types-list">
            {type.services.map((service) => (
              <li key={service.id} className="services-types-list-element">
                {service.title}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
