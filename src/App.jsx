import AnnouncementBar from "./components/layout/AnnouncementBar";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <>
      <AnnouncementBar />

      <Navbar />

      <main id="home">
        <div className="container-site py-20">
          <div className="glass-panel p-8 sm:p-12">
            <p className="text-label">PRYDA+ DESIGN STUDIO</p>

            <h1 className="text-display mt-4">Global Layout</h1>

            <p className="text-body mt-5 max-w-2xl">
              Announcement bar, navigation and footer are now ready. The website
              sections will be built next.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;
