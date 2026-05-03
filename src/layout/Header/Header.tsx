import Navigation from "./components/navigation";
import HeaderBackground from "../../static/images/landing-background.png";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import RightSideHeader from "./components/rightSideHeader";
import LeftSideHeader from "./components/leftSideHeader";

export default function Header() {
  const [page, setPage] = useState<string>("");
  const location = useLocation();
  const getPage = async () => {
    switch (location.pathname) {
      case "/":
        setPage("landing");
        break;
      default:
        setPage("");
        break;
    }
  };
  useEffect(() => {
    getPage();
  });
  return (
    <header>
      <Navigation />
      {/* Header background */}
      {page === "landing" ? (
        <aside id="header-background-wrapper">
          <img
            src={HeaderBackground}
            alt="Задний фон шапки сайта"
            id="header-background-image"
          />
          <div id="header-inner-background">
            <LeftSideHeader />
            <RightSideHeader />
          </div>
        </aside>
      ) : (
        <div id="header-block"></div>
      )}
    </header>
  );
}
