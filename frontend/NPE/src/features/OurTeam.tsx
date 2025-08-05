import React from 'react';

const teamData = [
  {
    name: 'Naomi Harvey',
    role: 'Lead Developer & Creator',
    bio: "Naomi, a former teacher, is the developer behind National Parks Explorer. Her goal for this site was to combine her passion for education, technology, and the great outdoors to build a digital experience that inspires adventure. Naomi's photo was taken at Sequoia National Park.",
    imageUrl: '/images/naomi.jpg', 
  },
  {
    name: 'Theo',
    role: 'Adventure Dog',
    bio: "Theo continues to adventure in dog friendly areas of National Parks, and is on his way to being a certified bark ranger through the National Park Service. His role in the software development is minimal, though he would likely tell you otherwise. Theo's photo was taken at Death Valley National Park",
    imageUrl: '/images/theo.jpg', 
  },
];

export function TeamPage() {
  return (
    <div
    style={{
      backgroundImage: "url('/images/treetops.jpg')",
      backgroundSize: 'cover', 
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      opacity: 0.9,
    }}>
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-xl font-heading tracking-tight text-black sm:text-4xl bg-white rounded p-2 opacity-90">
            Meet Our Team
          </h2>
          <p className="mt-4 text-lg leading-8 text-black font-sans  bg-white rounded p-2 opacity-90">
            We are a small, passionate team of 1 human and 1 dog, dedicated to bringing the wonder of the national parks to your fingertips.
          </p>
        </div>

        <ul
          role="list"
          className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 justify-center"
        >
          {teamData.map((person) => (
            <li 
              key={person.name} 
              className="flex flex-col items-center text-center"
            >
              <img className="h-56 w-56 rounded-full object-cover shadow-lg border-black border-2" src={person.imageUrl} alt={`Portrait of ${person.name}`} />
              <div className="mt-6 bg-white/90 rounded-lg p-4 space-y-2">
                <h3 className="text-xl font-bold leading-7 tracking-tight text-black font-heading">
                  {person.name}
                </h3>
                <p className="text-base font-semibold leading-6 text-black">{person.role}</p>
                <p className="text-base leading-7 text-black">{person.bio}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TeamPage;