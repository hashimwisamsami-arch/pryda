import AnnouncementBar from "./components/layout/AnnouncementBar";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/home/Hero";
import FeaturedWorks from "./components/home/FeaturedWorks";

function App() {
  return (
    <>
      <AnnouncementBar />

      <Navbar />

      <main id="home">
        <Hero />
        <FeaturedWorks />
      </main>

      <Footer />
    </>
  );
}

export default App;
