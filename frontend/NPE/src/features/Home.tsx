import { GalleryWithCarousel } from "../components/GalleryWithCarousel";
import HeroSection from "../components/HeroSection";

const Home = () => {
  return (
    <div>
      <>
      <HeroSection
        title="National Parks Explorer"
        subtitle="Love national parks? So do we. Welcome to National Parks Explorer, where adventure meets planning power."
        paragraph="National Parks Explorer is your all-in-one companion for exploring America's national parks. Create an account to save your favorite parks, download custom maps, plan future trips, and even play fun interactive games to learn about the parks before you go. Whether you're a seasoned hiker or planning your first outdoor adventure, National Park Explorer makes your journey easier, smarter, and way more fun."
        buttonText="Explore the playground"
        onButtonClick={() => alert("Let's go!")}
        >
      <GalleryWithCarousel />
      </HeroSection>
        </>
    </div>
  );
};

export default Home;