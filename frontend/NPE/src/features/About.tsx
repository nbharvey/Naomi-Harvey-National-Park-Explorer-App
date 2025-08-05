import React from 'react';

const siteFeatures = [
  {
    title: 'Interactive Maps',
    description: 'Explore all 63 National Parks on an interactive map, powered by Leaflet. Discover park locations, details, and official websites at a glance.',
  },
  {
    title: 'Educational Games',
    description: 'Test your knowledge with fun and engaging matching games. Match parks to their states or popular attractions in a drag-and-drop interface, created with React DnD.',
  },
  {
    title: 'Curated Bookshelf',
    description: 'Discover a library of books related to the National Parks. Filter by genre to find your next great read and spark your sense of adventure.',
  },
  {
    title: 'Powered by Public Data',
    description: 'All park information, including names, descriptions, and locations, is sourced directly from the official National Park Service (NPS) API.',
  },
  {
    title: 'Modern Technology',
    description: 'This site is built with a modern tech stack, including React, TypeScript, and Tailwind CSS, to provide a fast, responsive, and maintainable experience.',
  },
  {
        title: 'Database Integration',
        description: 'To manage user-specific data for features like the personal bookshelf, the application is connected to a Spring Boot backend and MySQL database, ensuring data is persistent and allowing for.'
  },
];

export function AboutPage() {
  return (
    <div className="relative min-h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-90"
        style={{ backgroundImage: "url('/images/rainbowRiver.jpg')" }}
      />
      
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-xl font-heading tracking-tight text-black sm:text-4xl bg-white/90 rounded p-2">
            About The Project
          </h1>
          <p className="mt-4 text-lg leading-8 text-black font-sans bg-white/90 rounded p-2">
            National Parks Explorer is a personal portfolio project designed to be your digital companion for exploring America's 63 designated National Parks.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
          {siteFeatures.map((feature) => (
            <div key={feature.title} className="flex flex-col rounded-2xl bg-white/90 p-8 text-center shadow-lg">
              <h3 className="text-lg font-bold leading-7 text-gray-900 font-heading">
                {feature.title}
              </h3>
              <p className="mt-4 flex-1 text-base leading-7 text-gray-700">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutPage;