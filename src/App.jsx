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
import Process from "./components/home/Process";

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
        <Process />
      </main>

      <Footer />
    </>
  );
}

export default App;
