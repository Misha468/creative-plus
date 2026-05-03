import { useState } from "react";
import { FAQList } from "../../../lists/FAQ";
import FAQArrow from "../../../static/icons/faq-arrow.png";

export default function Faq() {
  const [openId, setOpenId] = useState<number | null>(null);
  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };
  return (
    <section id="faq-list-wrapper">
      {FAQList.map((fact) => (
        <div key={fact.id} className="faq-list-element">
          <div
            className="faq-element-top-part"
            onClick={() => toggleFaq(fact.id)}
          >
            <p className="faq-element-title">{fact.title}</p>
            <div
              className={`faq-element-button-wrapper ${openId === fact.id ? "rotated" : ""}`}
            >
              <img
                src={FAQArrow}
                alt="Стрелочка подробнее"
                className="faq-element-button-icon"
              />
            </div>
          </div>
          <div
            className={`faq-element-content ${openId === fact.id ? "open" : ""}`}
          >
            <div className="faq-content-inner">
              <p className="faq-element-text">{fact.text}</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
