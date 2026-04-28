import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./layout/Header/Header";
import Landing from "./pages/Landing/Landing";
import Services from "./pages/Services/Services";
import Portfolio from "./pages/Portfolio/Portfolio";
import Reviews from "./pages/Reviews/Reviews";
import Contacts from "./pages/Contacts/Contacts";
import Footer from "./layout/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/услуги" element={<Services />} />
        <Route path="/портфолио" element={<Portfolio />} />
        <Route path="/отзывы" element={<Reviews />} />
        <Route path="/контакты" element={<Contacts />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
