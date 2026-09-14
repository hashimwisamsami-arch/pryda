import AnnouncementBar from "./components/layout/AnnouncementBar";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/home/Hero";
import FeaturedWorks from "./components/home/FeaturedWorks";
import CaseStudy from "./components/home/CaseStudy";

function App() {
  return (
    <>
      <AnnouncementBar />

      <Navbar />

      <main id="home">
        <Hero />
        <FeaturedWorks />
        <CaseStudy />
      </main>

      <Footer />
    </>
  );
}

export default App;
