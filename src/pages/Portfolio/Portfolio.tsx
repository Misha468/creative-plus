import { useState, useRef, useEffect } from "react";
import { FilterButtonsList } from "../../lists/FilterButtons";
import { PortfolioList } from "../../lists/Portfolio";
export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<string>("Все");
  const containerRef = useRef<HTMLDivElement>(null);
  const [isScrollable, setIsScrollable] = useState(false);
  const filteredImages =
    activeFilter === "Все"
      ? PortfolioList
      : PortfolioList.filter((item) => item.type === activeFilter);
  useEffect(() => {
    const checkScroll = () => {
      if (containerRef.current) {
        setIsScrollable(
          containerRef.current.scrollHeight > containerRef.current.clientHeight,
        );
      }
    };
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, [filteredImages]);
  return (
    <main>
      <div id="portfolio-page-wrapper">
        <p className="portfolio-page-title">Галерея проектов</p>
        <aside id="filters-wrapper">
          <p className="filters-title">Фильтры</p>
          {FilterButtonsList.map((button) => (
            <button
              key={button.id}
              className={`filter-button ${activeFilter === button.title ? "active" : ""}`}
              onClick={() => setActiveFilter(button.title)}
            >
              {button.title}
            </button>
          ))}
        </aside>
        <div className="portfolio-scroll-container">
          <div ref={containerRef} className="portfolio-grid-scroll">
            {filteredImages.map((item) => (
              <div key={item.id} className="portfolio-item">
                <img
                  src={item.image}
                  alt={item.title}
                  className="portfolio-image"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
          {isScrollable && <div className="portfolio-gradient-overlay"></div>}
        </div>
      </div>
    </main>
  );
}
