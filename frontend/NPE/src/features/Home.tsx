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
          backgroundImage: "url('/images/forestMountain.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.9,
        }}
        className="flex flex-col lg:flex-row px-4 py-8 gap-6 max-w-7xl mx-auto">
        {/* Left Sidebar Content */}
        <aside className="lg:w-1/4 space-y-6">
          <div
            className="shadow rounded-lg p-4 bg-orange-100">
            <p className="text-m text-center">National Parks Explorer is your companion for exploring America's 63 National Parks. Whether you're a seasoned hiker or planning your first outdoor adventure, National Park Explorer makes your journey easier, smarter, and way more fun.</p>

          
          </div>

          <div className="shadow rounded-lg p-4  bg-orange-100">
          <h3 className="font-bold text-lg text-center">Did You Know?</h3>
            <p className="text-sm text-black text-center">
              The 63 National Parks in the USA cover a total of 52.4 million acres. That is roughly 2% of the land area of the United States!
            </p>
            
          </div>
        </aside>

        {/* Center: Gallery */}
        <main className="lg:w-2/4">
          <div className="shadow rounded-lg p-4 bg-mossGreen">
          <h1 className="font-bold text-2xl text-black text-center">Welcome to <br />National Parks Explorer</h1>
          <GalleryWithCarousel />
          </div>
        </main>

        {/* Right Sidebar Content */}
        <aside className="lg:w-1/4 space-y-6">
          <div className="shadow rounded-lg p-4 bg-orange-100">
            <h3 className="font-bold text-lg text-center">Did You Know?</h3>
            <p className="text-sm text-black text-center">
              There are 63 designated U.S. National Parks, with Yellowstone
              being the first established in 1872!
            </p>
          </div>

          <div className="shadow rounded-lg p-4  bg-orange-100">
            <p className="text-lg text-center">Use National Parks Explorer to:</p>
           <ul className="text-xs text-center text-black">
              <li>⛰️ View all USA National Parks on the map</li>
              <li>⛰️ Test your knowledge of USA National Parks with a matching game</li>
              <li>⛰️ View epic adventure books, and add your recommendations to be viewed by the public!</li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Home;