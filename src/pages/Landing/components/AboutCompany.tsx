import AboutImage from "../../../static/images/landing-about.png";
import FactsBlock from "../../../static/images/facts-block.png";
export default function AboutCompany() {
  return (
    <aside id="about-company-wrapper">
      <section id="about-company-left-side">
        <p className="about-company-title">О чем наша компания</p>
        <p className="about-company-text">
          <b className="about-company-special-text">Креатив+ </b> — это опытное
          рекламно-производственное агентство полного цикла, специализирующееся
          на:
        </p>
        <div id="about-specialize-wrapper">
          <img src={FactsBlock} alt="Факты о компании" />
        </div>
        <p className="about-company-thesis-text">
          Мы создаем качественные подарки и рекламные материалы, чтобы помочь
          вашему бренду стать заметнее и запомниться.
        </p>
        <p className="about-company-thesis-title">
          Надежно, профессионально и с душой!
        </p>
      </section>
      <section id="about-company-right-side">
        <img src={AboutImage} alt="Фото компании" id="about-company-image" />
      </section>
    </aside>
  );
}
