const MyParks = () => {

    return (
        <div>
            <h1 className="text-xl font-bold text-center">My Parks</h1>
            <p>This page will start by prompting users to sign in or creating account. After sign-in, users will be on the MyParks page. At the top it will Welcome Explorer! Then say have a dropdwon menu on the left where they can choose what to do on this page.</p>
            <ul>
                <li>---Adventure Planner (this will have parks the user has saved from the explore parks tab. they can click into a park and say "create adventure". from there there will be a whole planning menu with dates, trip, and you can have cards from the park and place them in a calendar with drag and drop)</li>
                <li>---Park Tracker (this will be achecklist where users can check off the parks that they have visited and write the date and other information, like a journal.)</li>
                <li>---Packing List (will have a link to the NPE blog so users can check out common things to pack, it will have recommended items based on what kind of trip you are planning to the parks)</li>
                <li>---I want the bookshelf to appear here, but be only user books. THey can add via the form, and I need it to be not only books but also resources and maps. The book spines could be different colors based on what is on the shelf, and a dropdown should appear to filter. I'm thinking that the user could add a link to the resource so when they sign on literally everything they need for planning is in their MyParks account.</li>
            </ul>
        </div>
    )
};

export default MyParks;