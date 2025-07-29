import useParksData from "./useParksData";

function ParksMemoryGrid() {
    const { parksData, loading, error} = useParksData();

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error!</div>;

    return (
        <div>
            <h1>Parks</h1>
            <div>
                {parksData.map((park) => (
                    <div
                        key={park.id}
                        style={{
                            border: '1px solid gray',
                            margin: '5px',
                            padding: '10px',
                            width: '200px',
                          }}
                    >
                        <p>{park.fullName}</p>
                        <p>{park.states}</p>
                    </div>
                        ))}
</div>
        </div>
    )
};

export default ParksMemoryGrid;