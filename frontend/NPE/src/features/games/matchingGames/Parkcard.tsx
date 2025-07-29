import { useDrag } from 'react-dnd';


interface UsNationalPark {
    id: number;
    park: string;
    state: string;
}

interface ParkcardProps {
  park: UsNationalPark;
}
  
const ITEM_TYPE = 'PARK_CARD';
//enums
// enum GameMode{
//   ParkCode = "ParkCode",
//   Picture = "Picture",
//   Popular = "PopularPicture",
// };

const Parkcard: React.FC<ParkcardProps> = ({ park }) => {

  
  //both drag and drop return a ref, either drag
    const [{ isDragging }, drag] = useDrag(() => ({
      type: ITEM_TYPE,
        item: {id: park.id},
        collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }));
  

  
    // drag(drop(ref));
    
  return (
    <>
      
      <div
        ref={drag}
        className={`group h-[100px] w-[150px] cursor-pointer [perspective:1000px] ${isDragging ? 'opacity-40' : ''}`}
      >
        <div
          className={`relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d]`}
        >
          {/* Front */}
          <div className="absolute inset-0 [backface-visibility:hidden]">
            <div className="flex h-full flex-col items-center justify-center overflow-hidden rounded-xl bg-green text-center text-black">
              <h3 className="flex-grow p-4 text-l font-semibold">{`${park.park} National Park`}</h3>
            </div>
          </div>
  
          
          
          {/* Back */}
          {/* <div className="absolute inset-0 rounded-xl bg-[#29485C] p-6 text-white [backface-visibility:hidden] [transform:rotateY(180deg)]">
            <div className="flex h-full flex-col items-center justify-center text-center">
              <h2 className="text-2xl font-bold">{park.park}</h2>
              <p className="mt-2 text-lg"><strong>State:</strong> {park.state}</p>
              <p className="text-lg"><strong>Established:</strong> {new Date(park.established).getFullYear()}</p>
              {park.funFact && <p className="mt-4 text-base italic">"{park.funFact}"</p>}
            </div>
          </div> */}
        {/* </div>
      </div>

      <div
        ref={ref}
        className={`group h-[100px] w-[150px] cursor-pointer [perspective:1000px] ${isDragging ? 'opacity-40' : ''}`}
      >
        <div
          className={`relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d]`}
        > */}
          {/* Front */}
          {/* <div className="absolute inset-0 [backface-visibility:hidden]">
            <div className="flex h-full flex-col items-center justify-center overflow-hidden rounded-xl bg-kobicha text-center text-white">
              <h3 className="flex-grow p-4 text-l font-semibold">{`${park.state}`}</h3>
            </div>
          </div> */}
  
          
          
          {/* Back */}
          {/* <div className="absolute inset-0 rounded-xl bg-[#29485C] p-6 text-white [backface-visibility:hidden] [transform:rotateY(180deg)]">
            <div className="flex h-full flex-col items-center justify-center text-center">
              <p className="mt-2 text-lg"><strong>State:</strong> {park.state}</p>
              <p className="text-lg"><strong>Established:</strong> {new Date(park.established).getFullYear()}</p>
              {park.funFact && <p className="mt-4 text-base italic">"{park.funFact}"</p>}
            </div>
          </div> */}
        </div>
      </div>
      </>
    );
  }

  export default Parkcard;