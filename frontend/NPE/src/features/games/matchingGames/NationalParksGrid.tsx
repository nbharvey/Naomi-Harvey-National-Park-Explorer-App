import { useEffect, useState } from 'react';
import nationalParksData from '../../../../data/us_national_parks.json';
import Parkcard from './Parkcard';
import Statecard from './Statecard';
import { BasicMenu }  from '../../../components/BasicMenu';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { CustomButton } from '../../../components/CustomButton';
import AttractionCard from './Attractioncard';

interface UsNationalPark {
  id: number;
  park: string;
  state: string;
  popularAttraction: string;
}

const shuffleArray = (array: UsNationalPark[]): UsNationalPark[] => {
  return [...array].sort(() => Math.random() - 0.5);
}

const initialParks = nationalParksData.map(a => ({ sort: Math.random(), value: a }))
.sort((a, b) => a.sort - b.sort)
.map(a => a.value);

function NationalParksGrid() {
  const [selectedGame, setSelectedGame] = useState("None");
  const [cardCount, setCardCount] = useState(0);

  const [gameParks, setGameParks] = useState<UsNationalPark[]>([]);
  const [gameStates, setGameStates] = useState<UsNationalPark[]>([]);
  const [gameAttractions, setGameAttractions] = useState<UsNationalPark[]>([]);
  const [matchedIds, setMatchedIds] = useState<number[]>([]);
  
//sets up game board when selections change
useEffect(() => {
  if (selectedGame === "Match by State" && cardCount > 0) {
      const numberOfPairs = cardCount / 2;
      const selected = initialParks.slice(0, numberOfPairs);
      
      // gameParks and gameStates get their data ==
      // They are populated with independently shuffled lists
      setGameParks(shuffleArray(selected));
      setGameStates(shuffleArray(selected));
      setMatchedIds([]); // Reset matches when a new game starts
  } else if (selectedGame === "Match by Popular Attraction" && cardCount > 0) {
    const numberOfPairs = cardCount / 2;
    const selected = initialParks.slice(0, numberOfPairs);
    
    // gameParks and gameStates get their data populated with independently shuffled lists
    setGameParks(shuffleArray(selected));
    setGameAttractions(shuffleArray(selected));
    setMatchedIds([]);
  } else {
    // clear the game board if the game mode is not active
    setGameParks([]);
    setGameStates([]);
    setGameAttractions
  }
}, [selectedGame, cardCount]);

const handleMatch = (parkId: number, stateId: number) => {
  if (parkId === stateId) {
      console.log(`Correct match: ID ${parkId}`);
      // add  ID to  list of matched pairs, preventing duplicates
      setMatchedIds(prev => prev.includes(parkId) ? prev : [...prev, parkId]);
  } else {
      console.log(`Incorrect match: Park ID ${parkId} dropped on State ID ${stateId}`);
  }
};
  
const parksToDisplay = gameParks.filter(p => !matchedIds.includes(p.id));

  return (
    <DndProvider backend={HTML5Backend}>
    <div>
        <h2 className='flex flex-wrap justify-center gap-8 p-4 text-xl bg-mossGreen text-black'>National Park Matching Game</h2>
      </div>

      <div className="flex flex-wrap justify-center gap-8 p-4">

      <BasicMenu
        label="Choose Game Type"
        options={["Match by State", "Match by Popular Attraction"]}
        onSelect={(opt) => {
          setSelectedGame(opt as string);
          console.log("Game type:", opt);
        }}
      />

      <BasicMenu
        label="Number of Cards"
        options={[12, 24, 36]}
        onSelect={(opt) => {
          setCardCount(Number(opt));
          console.log("Card count:", opt);
        }}
      />
      </div>

      {selectedGame === 'Match by State' && cardCount > 0 ? (
                    <div className="flex flex-col lg:flex-row justify-around gap-8">
                        {/* Parks Column - Renders from the `parksToDisplay` list */}
                        <div className="flex-1 p-4 bg-white/90 rounded-xl shadow-lg">
                            <h3 className="text-xl font-bold text-center mb-4 text-black">Parks</h3>
                            <div className="flex flex-wrap justify-center gap-4 min-h-[120px]">
                                {parksToDisplay.length > 0 ? parksToDisplay.map((park) => (
                                    <Parkcard key={park.id} park={park} />
                                )) : (
                                <p className="text-black self-center">All parks matched!
                                  <CustomButton type="submit"> <p className='self-center text-black'>Play Again!</p>
                                  {/* {formData.isEditing ? 'Play Again!' : 'Take Me Home'} */}
                                  </CustomButton>
                                    </p>
                                )}
                            </div>
                          </div>
          
                        {/* States Column - Renders from the `gameStates` list */}
                        <div className="flex-1 p-4 bg-white/90 rounded-xl shadow-lg">
                            <h3 className="text-xl font-bold text-center mb-4 text-black">States</h3>
                            <div className="flex flex-wrap justify-center gap-4">
                                {gameStates.map((parkData) => (
                                    <Statecard
                                        key={parkData.id}
                                        parkData={parkData}
                                        onMatch={handleMatch}
                                        isMatched={matchedIds.includes(parkData.id)}
                                    />
                                ))}
                            </div>
                          </div>
        </div>
      ) : selectedGame === 'Match by Popular Attraction' && cardCount > 0 ? (
          <div className="flex flex-col lg:flex-row justify-around gap-8 mt-8">
              {/* Parks Column - Renders from the `parksToDisplay` list */}
              <div className="flex-1 p-4 bg-white/90 rounded-xl shadow-lg">
                  <h3 className="text-xl font-bold text-center mb-4 text-black">Parks</h3>
                  <div className="flex flex-wrap justify-center gap-4 min-h-[120px]">
                      {parksToDisplay.length > 0 ? parksToDisplay.map((park) => (
                          <Parkcard key={park.id} park={park} />
                      )) : (
                      <p className="text-black self-center">All parks matched!
                        <CustomButton type="submit"> <p className='self-center text-black'>Play Again!</p>
                        {/* {formData.isEditing ? 'Play Again!' : 'Take Me Home'} */}
                        </CustomButton>
                          </p>
              )}
                  </div>
                </div>
      
              {/* Attractions Column - Renders from the `gameAttractions` list */}
              <div className="flex-1 p-4 bg-white/90 rounded-xl shadow-lg">
                  <h3 className="text-xl font-bold text-center mb-4 text-black">Popular Attractions</h3>
                  <div className="flex flex-wrap justify-center gap-4">
                      {gameAttractions.map((parkData) => (
                          <AttractionCard
                          key={parkData.id}
                          parkData={parkData}
                          onMatch={handleMatch}
                          isMatched={matchedIds.includes(parkData.id)}
                          />
                      ))}
                  </div>
                </div>
</div>

                ) : (
                    <div className="text-center mt-8 text-black">
                        <p>Please select "Match by State" and a number of cards to begin.</p>
                    </div>
                )}    
  
      </DndProvider>
  );
}

export default NationalParksGrid;