import { GameCard } from "../../components/GameCard";

interface GameInfo {
    id: string;
    title: string;
    description: string;
    path: string;
  }

  const gameData: GameInfo[] = [
    {
      id: 'parks-matching-game',
      title: "National Parks Matching Game",
      description: "A flashcard matching game. It is cool.",
      path: '/games/parks-matching-game',
      },
      {
        id: 'parks-memory-game',
        title: "National Parks Memory",
        description: "A memory game. It is cool.",
        path: '/games/parks-memory-game',
      },
  ];

function Games() {
    
    return (
            <div className="flex flex-wrap justify-center gap-8 p-4">
              {gameData.map((game) => (
                <GameCard
                  key={game.id}
                  title={game.title}
                  description={game.description}
                  path={game.path}
                  />
              ))}
            </div>
    );
  };

export default Games;