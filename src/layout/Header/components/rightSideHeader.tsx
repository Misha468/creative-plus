import StatisticIcon from "../../../static/images/statistic.png";
export default function RightSideHeader() {
  return (
    <section id="header-inner-background-right-side">
      <img
        src={StatisticIcon}
        alt="Иконка статистики"
        id="header-statistic-icon"
      />
      <div id="header-company-fact">
        <p className="company-fact-title">25+</p>
        <p className="company-fact-text">
          Столько лет мы радуем наших клиентов качественной работой
        </p>
        <article id="line-wrapper">
          <div id="black-line"></div>
          <div id="gray-line"></div>
        </article>
      </div>
    </section>
  );
}
