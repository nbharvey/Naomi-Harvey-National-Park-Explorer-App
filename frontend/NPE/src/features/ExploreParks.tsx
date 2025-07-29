const ExploreParks = () => {

    return(
        <div>
            <h1 className="text-xl font-bold text-center">Explore Parks</h1>
            <p>Here at National Parks Explorer we are all about adventure. Use this page to help you explore the parks, and when you find something that sparks your interest save it to your MyParks account. On your MyParks account page, you can plan your most exciting adventure yet!</p>
            <ul>
                <li>---Maps: USA National Parks, search by designation, on hover see information about the park and be able to add to saved trips, on click opens a modal that gives detailed information about that park, and offers a link to the official NPS site for even more information (ONLY usa national parks should be numbered, the rest should have different colors or symbols for their designation) </li>
                <li>---Recomomended Trips: here you can explore trips based on location, number of park sites visted, length of trip. If you like a trip you can add it to your MyParks page</li>
                <li>---Explore by Park feature: here you can sort by what activity you want to do or attractions you want to see. <br />Sports include: rock climbing, kayaking, white water rafting <br />Attractions include: </li>
            </ul>
        </div>
    )
}

export default ExploreParks;