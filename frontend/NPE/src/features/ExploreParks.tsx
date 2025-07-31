const ExploreParks = () => {

    return (
        <div className="p-6 max-w-5xl mx-auto space-y-6">
          <h1 className="text-3xl font-bold text-center text-green-800">Explore Parks</h1>
    
          <p className="text-gray-700 text-lg">
            Here at <strong>National Parks Explorer</strong> we are all about adventure. Use this page to help you explore
            the parks, and when you find something that sparks your interest, save it to your <em>MyParks</em> account. On
            your <em>MyParks</em> account page, you can plan your most exciting adventure yet!
          </p>
    
          <ul className="list-disc space-y-4 pl-6 text-gray-800">
            <li>
              <strong>Maps:</strong> USA National Parks – search by designation. On hover, see park info and save to
              trips. On click, open a modal with park details and a link to the official NPS site. 
              <br />
              <span className="text-sm text-gray-600 italic">
                Only USA national parks should be numbered; other designations should have different colors or symbols.
              </span>
            </li>
    
            <li>
              <strong>Recommended Trips:</strong> Explore curated trips based on location, number of sites, and trip
              length. Save trips you like to your <em>MyParks</em> page.
            </li>
    
            <li>
              <strong>Explore by Park Feature:</strong> Sort by activities or attractions.
              <br />
              <strong>Sports:</strong> Rock climbing, kayaking, white water rafting.
              <br />
              <strong>Attractions:</strong> [Add specific attractions here]
            </li>
          </ul>
    
          {/* Placeholder Components – You can replace these with real ones */}
          <div className="border-t pt-6 space-y-10">
            <section id="map-explorer">
              <h2 className="text-2xl font-semibold text-green-700 mb-2">Map Explorer</h2>
              {/* TODO: Add interactive map component */}
              <div className="h-64 bg-gray-100 rounded shadow-inner flex items-center justify-center text-gray-500">
                [Map with hover & click interactivity here]
              </div>
            </section>
    
            <section id="recommended-trips">
              <h2 className="text-2xl font-semibold text-green-700 mb-2">Recommended Trips</h2>
              {/* TODO: Add trip recommendation component */}
              <div className="h-40 bg-gray-100 rounded shadow-inner flex items-center justify-center text-gray-500">
                [Recommended trips here]
              </div>
            </section>
    
            <section id="explore-by-park">
              <h2 className="text-2xl font-semibold text-green-700 mb-2">Explore by Park</h2>
              {/* TODO: Add filter/sorting options for activities/attractions */}
              <div className="h-40 bg-gray-100 rounded shadow-inner flex items-center justify-center text-gray-500">
                [Filters for activities & attractions here]
              </div>
            </section>
          </div>
        </div>
      );
    };
    
    export default ExploreParks;