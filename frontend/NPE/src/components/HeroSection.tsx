import { CustomButton } from './CustomButton';
import { COLOR_PALETTE } from '../assets/colors/colors';
import { GalleryWithCarousel } from './GalleryWithCarousel';

type HeroSectionProps = {
  title: string;
  subtitle: string;
  paragraph: string;
  backgroundImage: string;
  onButtonClick?: () => void;
  buttonText?: string;
};

function HeroSection({
  title,
  subtitle,
  paragraph,
  backgroundImage,
  onButtonClick,
  buttonText = "Click me",
}: HeroSectionProps) {
  return (
    <section className="relative">
      <div
        className="absolute inset-0 bg-cover bg-center z-0 bg-almond"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />

      <div
        className="absolute inset-0 z-10"
        style={{ backgroundColor: `${COLOR_PALETTE.white}88` }} // semi-transparent
      ></div>

      <div className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 z-20 space-y-8">
        <div>
          <h1
            className="text-4xl md:text-6xl font-bold mb-0 m-10"
            style={{ color: COLOR_PALETTE.kobicha }}
          >
            {title}
                  </h1>
                  
          <h2
            className="text-2xl md:text-4xl font-bold mb-0 m-10"
            style={{ color: COLOR_PALETTE.kobicha }}
          >
            {subtitle}
                  </h2>
                  
              </div>
              <div className="w-full max-w-md">
          <GalleryWithCarousel />
        </div>
        <div>
        <p
            className="text-md md:text-l mb-0 m-10 max-w-xl mx-auto"
            style={{ color: COLOR_PALETTE.mossGreen }}
          >
            {paragraph}
          </p>
        </div>
              <div>
          <CustomButton
            onClick={onButtonClick}
            style={{
              backgroundColor: COLOR_PALETTE.blackOlive,
              color: COLOR_PALETTE.white,
            }}
    className="m-10"
          >
            {buttonText}
          </CustomButton>
        </div>

       
      </div>
    </section>
  );
}

export default HeroSection;
