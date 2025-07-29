import { useState, useEffect } from "react";

interface NpsCard {
    id: string;
    fullName: string;
    parkCode: string;
    description: string;
    states: string;
    designation: string;
}

//shuffler helper
const shuffleArray = (array: NpsCard[]): NpsCard[] => { 
    return [...array].sort(() => Math.random() - 0.5);

}

const useParksData = () => {
    const [parksData, setParksData] = useState<NpsCard[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState < string | null>(null);



    useEffect(() => {
        const fetchParks = async () => {
            try {
                const apiKey = import.meta.env.VITE_NPS_API_KEY;
                const response = await fetch(`https://developer.nps.gov/api/v1/parks?limit=500&api_key=${apiKey}`);

                if (!response.ok) throw new Error('Failed to fetch parks data');

                const data = await response.json();

                const nationalParks = data.data.filter((park: NpsCard) => park.designation === 'National Park');

                //format and duplicate cards
                const formattedParks = nationalParks.map((park: NpsCard) => ({
                    fullName: park.fullName,
                    parkCode: park.parkCode,
                    description: park.description,
                    states: park.states,
                    designation: park.designation,
                }));

                const duplicatedParks = [...formattedParks, ...formattedParks].map((park, index) => ({
                    ...park,
                    id: `${park.parkCode}-${index}`,
                }));
                
                setParksData(shuffleArray(duplicatedParks));
                setLoading(false);
            } catch (err) {
                setError((err as Error).message);
                setLoading(false);
            }
        };

        fetchParks();
    }, []);

    return { parksData, loading, error };
};

export default useParksData;

;

