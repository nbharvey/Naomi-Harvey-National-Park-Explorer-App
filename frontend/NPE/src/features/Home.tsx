import { GalleryWithCarousel } from "../components/GalleryWithCarousel";
// import HeroSection from "../components/HeroSection";

const Home = () => {
  return (
    <div className="flex flex-col bg-green">
      {/* <HeroSection
        title="National Parks Explorer"
        subtitle="Love national parks? So do we. Welcome to National Parks Explorer, where adventure meets planning power."
        paragraph="National Parks Explorer is your all-in-one companion for exploring America's national parks. Create an account to save your favorite parks, download custom maps, plan future trips, and even play fun interactive games to learn about the parks before you go. Whether you're a seasoned hiker or planning your first outdoor adventure, National Park Explorer makes your journey easier, smarter, and way more fun."
        buttonText="Explore the playground"
        backgroundImage="/images/hero/forest_mountains.jpg"
        onButtonClick={() => alert("Let's go!")}
      /> */}

      {/* New Section: Page Content Below Hero */}
      <div
        style={{
          backgroundImage: "url('/images/sunsetMountains.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.9,
        }}
        className="flex flex-col lg:flex-row px-4 py-8 gap-6 max-w-7xl mx-auto">
        {/* Left Sidebar Content */}
        <aside className="lg:w-1/4 space-y-6">
          <div
            className="shadow rounded-lg p-4">
            <h1 className="font-bold text-2xl text-black text-center mb-2">Welcome to <br />National Parks Explorer</h1>
          
          </div>

          <div className="bg-white shadow rounded-lg p-4">
            <p className="text-m text-center mb-2">National Parks Explorer is companion for exploring America's 63 National Parks. Whether you're a seasoned hiker or planning your first outdoor adventure, National Park Explorer makes your journey easier, smarter, and way more fun.</p>
            <ul className="text-sm text-center text-almond space-y-1">
              <li>View all USA National Parks on the map</li>
              <li>Test your knowledge of USA National Parks with a matching game</li>
              <li>View epic adventure books, and add your recommendations to be viewed by the public!</li>
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
            <h3 className="font-bold text-lg mb-2">Did You Know?</h3>
            <p className="text-sm text-gray-700 mb-2">
              The 63 National Parks in the USA cover a total of 52.4 million acres. That is roughly 2% of the land area of the United States!
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