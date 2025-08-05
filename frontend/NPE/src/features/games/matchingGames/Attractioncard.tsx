import { useDrop } from 'react-dnd';

// It must accept the same item type defined in Parkcard.
const ITEM_TYPE = 'PARK_CARD';

interface UsNationalPark {
    id: number;
    park: string;
    popularAttraction: string;
}

// define the structure of the item being dropped from Parkcard
interface DroppedItem {
    id: number;
}
interface AttractioncardProps {
    parkData: UsNationalPark;
    onMatch: (parkId: number, stateId: number) => void;
    isMatched: boolean;
}

const AttractionCard: React.FC<AttractioncardProps> = ({ parkData, onMatch, isMatched }) => {
    const [{ isOver }, drop] = useDrop(() => ({
        accept: ITEM_TYPE,
        // function executes when a park is dropped on this state card
        drop: (item: DroppedItem) => onMatch(item.id, parkData.id),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
        }),
    }));
    // Define CSS classes for styling.
    const baseClasses = "h-[100px] w-[150px] rounded-xl shadow-xl flex items-center justify-center p-2 border-black border-2 border-dashed transition-all duration-200";
    const idleClasses = "bg-green-100 border-green-400";
    const hoverClasses = "bg-green-300 ring-4 ring-green-400";
    const matchedClasses = "bg-black-300 border-black-400";

    if (isMatched) {
        return (
            <div className={`${baseClasses} ${matchedClasses}`}>
                <p className="font-bold text-black">Matched!</p>
            </div>
        );
    }

    // `ref={drop}` from the useDrop hook makes this div a drop target.
    return (
        <div ref={drop} className={`${baseClasses} ${isOver ? hoverClasses : idleClasses}`}>
            <h3 className="text-center text-l font-semibold text-black">{parkData.popularAttraction}</h3>
        </div>
    );
}

export default AttractionCard;
