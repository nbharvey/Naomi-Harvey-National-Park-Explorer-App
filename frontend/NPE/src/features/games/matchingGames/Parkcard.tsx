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
            <div className="flex h-full flex-col items-center justify-center overflow-hidden rounded-xl bg-mossGreen border-black border-2 text-center text-black">
              <h3 className="flex-grow p-4 text-l font-semibold">{`${park.park} National Park`}</h3>
            </div>
          </div>
  
        </div>
      </div>
      </>
    );
  }

  export default Parkcard;