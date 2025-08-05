import { GalleryWithCarousel } from "../components/GalleryWithCarousel";

const Home = () => {
  return (
    <div className="flex flex-col">

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
            <p className="text-sm text-center"><strong className="font-heading">National Parks Explorer</strong> is your companion for exploring America's 63 National Parks. Whether you're a seasoned hiker or planning your first outdoor adventure, <strong className="font-heading">National Parks Explorer</strong> makes your journey easier, smarter, and way more fun.</p>

          
          </div>

          <div className="shadow rounded-lg p-4  bg-orange-100">
          <h3 className="font-heading text-lg text-center">Did You Know?</h3>
            <p className="text-sm text-black text-center">
              The 63 National Parks in the USA cover a total of 52.4 million acres. That is roughly 2% of the land area of the United States!
            </p>
            
          </div>
        </aside>

        {/* Center: Gallery */}
        <main className="lg:w-2/4">
          <div className="shadow rounded-lg p-4 bg-mossGreen">
          <h1 className="font-bold font-heading text-2xl text-black text-center">Welcome to <br />National Parks Explorer</h1>
          <GalleryWithCarousel />
          </div>
        </main>

        {/* Right Sidebar Content */}
        <aside className="lg:w-1/4 space-y-6">
          <div className="shadow rounded-lg p-4 bg-orange-100">
            <h3 className="font-heading text-lg text-center">Did You Know?</h3>
            <p className="text-sm text-black text-center">
              There are 63 designated U.S. National Parks, with Yellowstone
              being the first established in 1872!
            </p>
          </div>

          <div className="shadow rounded-lg p-4  bg-orange-100">
            <p className="text-lg text-center font-heading">Use National Parks Explorer to:</p>
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