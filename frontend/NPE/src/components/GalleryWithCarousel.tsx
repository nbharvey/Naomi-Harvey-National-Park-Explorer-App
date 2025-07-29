import { Carousel } from "@material-tailwind/react";
 
export function GalleryWithCarousel() {
  return (
    <>
    
    <div className="w-[400px] h-[300px] mx-auto">

    <Carousel loop={true} autoplay={true} className="rounded-xl">
      <img
        src="./public/images/np_landscapes/BLCA_bigwall.JPG"
        alt="image 1"
        className="h-full w-full object-cover object-center"
      />
      <img
        src="./public/images/np_landscapes/CARE_rockwall.PNG"
        alt="image 2"
        className="h-full w-full object-cover object-center"
      />
      <img
        src="./public/images/np_landscapes/DEVA_painted_rocks.PNG"
        alt="image 3"
        className="h-full w-full object-cover object-center"
          />
       <img
        src="./public/images/np_landscapes/GRSA_dunes_and_crestones.PNG"
        alt="image 3"
        className="h-full w-full object-cover object-center"
          />
        
      <img
      src="./public/images/np_landscapes/JOTR_desert.PNG"
      alt="image 3"
      className="h-full w-full object-cover object-center"
          />
          
      <img
      src="./public/images/np_landscapes/MEVE_cliffdwellings.JPG"
      alt="image 3"
      className="h-full w-full object-cover object-center"
          />
        </Carousel>
        </div>
</>
  );
}