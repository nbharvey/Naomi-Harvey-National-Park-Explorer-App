# National Parks Explorer

![National Parks Explorer](https://placehold.co/800x400/A8D1A3/333333?text=National+Parks+Explorer)

National Parks Explorer is a personal portfolio project designed to be your digital companion for exploring America's 63 designated National Parks. This application combines a passion for education, technology, and the great outdoors to build a digital experience that inspires adventure.

---

## Features

* **Interactive Maps:** Explore all 63 National Parks on an interactive map, powered by Leaflet. Discover park locations, details, and official websites at a glance.
* **Educational Games:** Test your knowledge with fun and engaging matching games. Match parks to their states or popular attractions in a drag-and-drop interface created with React DnD.
* **Curated Bookshelf:** Discover a library of books related to the National Parks. Filter by genre to find your next great read and add your own recommendations for others to see.
* **Database Integration:** User-specific data for features like the personal bookshelf is managed through a Spring Boot backend connected to a MySQL database, ensuring data is persistent and secure with full CRUD functionality.
* **Powered by Public Data:** All park information, including names, descriptions, and locations, is sourced directly from the official National Park Service (NPS) API.

---

## Tech Stack

This site is built with a modern tech stack to provide a fast, responsive, and maintainable experience.

* **Frontend:** React, TypeScript, Tailwind CSS
* **Backend:** Spring Boot, Java
* **Database:** MySQL
* **APIs & Libraries:**
    * National Park Service (NPS) API
    * React Router
    * Leaflet.js
    * React DnD

---

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

* Node.js and npm installed on your machine.
* An API key from the [National Park Service API](https://www.nps.gov/subjects/developer/get-started.htm).

### Installation

1.  **Clone the repo**
    ```sh
    git clone [https://github.com/your-username/your-repo-name.git](https://github.com/your-username/your-repo-name.git)
    ```
2.  **Navigate to the project directory**
    ```sh
    cd your-repo-name
    ```
3.  **Install NPM packages**
    ```sh
    npm install
    ```
4.  **Set up environment variables**
    Create a `.env.local` file in the root of your project and add your NPS API key:
    ```
    VITE_NPS_API_KEY=YOUR_API_KEY_HERE
    ```
5.  **Run the development server**
    ```sh
    npm run dev
    ```
The application should now be running on `http://localhost:5173` (or another port if specified).
