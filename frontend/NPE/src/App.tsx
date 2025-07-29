import './App.css'
import Home from './features/Home.tsx'
import { Route, Routes } from "react-router-dom";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Bookshelf from './features/bookshelf/Bookshelf.tsx';
import Games from './features/games/Games.tsx';
import { NavbarDefault } from './components/Navbar.tsx';
import { FooterWithSitemap } from './components/Footer.tsx';
import PageNotFound from './components/404Page.tsx';
import NationalParksGrid from './features/games/matchingGames/NationalParksGrid.tsx';
import ParksMemoryGrid from './features/games/memoryGames/ParksMemoryGrid.tsx';
import MyParks from './features/MyParks.tsx';
import ExploreParks from './features/ExploreParks.tsx';
import MapsHome from './features/maps/MapsHome.tsx';

function App() {

  return (
    <>
      <DndProvider backend={HTML5Backend}>
      <NavbarDefault />

      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/games" element={<Games />} />
          <Route path="/games/parks-matching-game" element={<NationalParksGrid />} />"
          <Route path="/games/parks-memory-game" element={<ParksMemoryGrid />} />"

          <Route path="/bookshelf" element={<Bookshelf />} />
          <Route path="/myparks" element={<MyParks />} />
          <Route path="/explore" element={<ExploreParks />} />
          <Route path="/maps" element={<MapsHome />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
        
      <FooterWithSitemap />

  </DndProvider>
    </>
  )
}

export default App
