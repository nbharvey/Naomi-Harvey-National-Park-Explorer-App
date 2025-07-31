import { GalleryWithCarousel } from "../components/GalleryWithCarousel";
import HeroSection from "../components/HeroSection";

const Home = () => {
  return (
    <div className="flex flex-col">
      <HeroSection
        title="National Parks Explorer"
        subtitle="Love national parks? So do we. Welcome to National Parks Explorer, where adventure meets planning power."
        paragraph="National Parks Explorer is your all-in-one companion for exploring America's national parks. Create an account to save your favorite parks, download custom maps, plan future trips, and even play fun interactive games to learn about the parks before you go. Whether you're a seasoned hiker or planning your first outdoor adventure, National Park Explorer makes your journey easier, smarter, and way more fun."
        buttonText="Explore the playground"
        backgroundImage="/images/hero/forest_mountains.jpg"
        onButtonClick={() => alert("Let's go!")}
      />

      {/* New Section: Page Content Below Hero */}
      <div className="flex flex-col lg:flex-row px-4 py-8 gap-6 max-w-7xl mx-auto">
        {/* Left Sidebar Content */}
        <aside className="lg:w-1/4 space-y-6">
          <div className="bg-white shadow rounded-lg p-4">
            <h3 className="font-bold text-lg mb-2">Park Tips</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>🥾 Pack layers</li>
              <li>🦺 Stay on trail</li>
              <li>🚰 Bring plenty of water</li>
              <li>📵 Download offline maps</li>
            </ul>
          </div>

          <div className="bg-white shadow rounded-lg p-4">
            <h3 className="font-bold text-lg mb-2">Upcoming Events</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>🌕 Full Moon Hike - Aug 12</li>
              <li>📚 Ranger Talk - Aug 20</li>
              <li>🎨 Nature Sketching - Sept 1</li>
            </ul>
          </div>
        </aside>

        {/* Center: Gallery */}
        <main className="lg:w-2/4">
          <div className="bg-white shadow rounded-lg p-4">
            <h2 className="text-xl font-bold mb-4">Explore the Parks</h2>
            <GalleryWithCarousel />
          </div>
        </main>

        {/* Right Sidebar Content */}
        <aside className="lg:w-1/4 space-y-6">
          <div className="bg-white shadow rounded-lg p-4">
            <h3 className="font-bold text-lg mb-2">Did You Know?</h3>
            <p className="text-sm text-gray-700">
              There are 63 designated U.S. National Parks, with Yellowstone
              being the first established in 1872!
            </p>
          </div>

          <div className="bg-white shadow rounded-lg p-4">
            <h3 className="font-bold text-lg mb-2">Join the Community</h3>
            <p className="text-sm text-gray-700 mb-2">
              Connect with fellow explorers and share your favorite park stories and tips.
            </p>
            <button className="w-full py-2 px-4 bg-green-600 text-white rounded hover:bg-green-700">
              Join Now
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Home;