import "./App.css";
import Hero from "./pages/Hero/Hero";
import About from "./pages/HomePage/about";
import Footer from "./pages/Footer/footer";
import Sponsors from "./pages/SponsorsPage/sponsors";
import Faq from "./pages/Faq/Faq";
import Events from "./pages/EventsPage/events";
import Tracks from "./pages/Tracks/Tracks";

function App() {
  return (
    <>
      <Hero />
      <About />
      <Sponsors />
      <Events />
      <Tracks />
      <Faq />
      <Footer />
	</>

  );
}

export default App;

// Add in package-json & build to deploy: "homepage": "https://auceg.acm.org/codher",
