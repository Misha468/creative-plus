import { useEffect, useRef, useState } from "react";

const baseWords = [
  "КРЕАТИВ ПЛЮС",
  "ДИЗАЙН",
  "РЕКЛАМА",
  "ПОЛИГРАФИЯ",
  "СУВЕНИРЫ",
];

export default function InfiniteWordsCarousel() {
  const [words, setWords] = useState([...baseWords]);
  const trackRef = useRef<HTMLDivElement>(null);
  const scrollProgressRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollY / maxScroll;
      const infiniteProgress = progress * 100;
      scrollProgressRef.current = infiniteProgress;
      if (trackRef.current) {
        const translateX = -(infiniteProgress * 50) % 100;
        trackRef.current.style.transform = `translateX(${translateX}vw)`;
      }
      if (progress > 0.8 && words.length < 30) {
        setWords((prev) => [...prev, ...baseWords]);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [words]);
  return (
    <div className="infinite-carousel">
      <div className="infinite-track" ref={trackRef}>
        {words.map((word, index) => (
          <div key={index} className="carousel-word">
            {word}
            {index < words.length - 1 && <span className="separator"></span>}
          </div>
        ))}
        {words.map((word, index) => (
          <div key={index} className="carousel-word">
            {word}
            {index < words.length - 1 && <span className="separator"></span>}
          </div>
        ))}
      </div>
    </div>
  );
}
