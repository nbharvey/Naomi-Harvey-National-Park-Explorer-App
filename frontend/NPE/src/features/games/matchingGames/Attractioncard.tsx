import { useDrop } from 'react-dnd';

// It must accept the same item type defined in Parkcard.
const ITEM_TYPE = 'PARK_CARD';

interface UsNationalPark {
    id: number;
    park: string;
    popularAttraction: string;
}

// Define the structure of the item being dropped from Parkcard.
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
        // This function executes when a park is dropped on this state card
        drop: (item: DroppedItem) => onMatch(item.id, parkData.id),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
        }),
    }));
    // Define CSS classes for styling.
    const baseClasses = "h-[100px] w-[150px] rounded-xl shadow-xl flex items-center justify-center p-2 border-2 border-dashed transition-all duration-200";
    const idleClasses = "bg-blue-100 border-blue-400";
    const hoverClasses = "bg-blue-300 ring-4 ring-blue-400";
    const matchedClasses = "bg-gray-300 border-gray-400";

    // If this state has been matched, show a "Matched!" message.
    if (isMatched) {
        return (
            <div className={`${baseClasses} ${matchedClasses}`}>
                <p className="font-bold text-gray-600">Matched!</p>
            </div>
        );
    }

    // The `ref={drop}` from the useDrop hook makes this div a drop target.
    return (
        <div ref={drop} className={`${baseClasses} ${isOver ? hoverClasses : idleClasses}`}>
            <h3 className="text-center text-l font-semibold text-blue-800">{parkData.popularAttraction}</h3>
        </div>
    );
}

export default AttractionCard;
