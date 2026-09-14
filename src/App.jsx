import AnnouncementBar from "./components/layout/AnnouncementBar";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/home/Hero";
import FeaturedWorks from "./components/home/FeaturedWorks";
import CaseStudy from "./components/home/CaseStudy";
import Services from "./components/home/Services";
import AboutStudio from "./components/home/AboutStudio";
import Advantages from "./components/home/Advantages";
import Stats from "./components/home/Stats";

function App() {
  return (
    <>
      <AnnouncementBar />

      <Navbar />

      <main id="home">
        <Hero />
        <FeaturedWorks />
        <CaseStudy />
        <Services />
        <AboutStudio />
        <Advantages />
        <Stats />
      </main>

      <Footer />
    </>
  );
}

export default App;
