import { useState } from "react";

const MyParks = () => {
  const [selectedSection, setSelectedSection] = useState("planner");

  const renderSectionContent = () => {
    switch (selectedSection) {
      case "planner":
        return (
          <div>
            <h2 className="text-xl font-bold mb-2">Adventure Planner</h2>
            <p>View your saved parks and start planning your next adventure. Select a park to create a trip, add dates, and drag park activity cards into a calendar.</p>
          </div>
        );
      case "tracker":
        return (
          <div>
            <h2 className="text-xl font-bold mb-2">Park Tracker</h2>
            <p>Check off parks you've visited, log visit dates, and write journal entries about your experiences.</p>
          </div>
        );
      case "packing":
        return (
          <div>
            <h2 className="text-xl font-bold mb-2">Packing List</h2>
            <p>See packing recommendations and visit our <a href="/blog" className="text-green-700 underline">blog</a> for detailed guides based on your trip type.</p>
          </div>
        );
      case "bookshelf":
        return (
          <div>
            <h2 className="text-xl font-bold mb-2">Bookshelf</h2>
            <p>Manage your personal planning shelf including books, maps, and resources. Items can be filtered by type and linked directly to external resources.</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen px-4 py-8 max-w-7xl mx-auto">
      {/* Sign-in prompt placeholder */}
      <div className="bg-yellow-100 border border-yellow-300 p-4 rounded mb-6">
        <p className="text-center text-yellow-800">Please <a href="/login" className="underline font-bold">sign in</a> or <a href="/signup" className="underline font-bold">create an account</a> to access your MyParks dashboard.</p>
      </div>

      {/* Welcome & Layout */}
      <h1 className="text-3xl font-bold text-center mb-8">Welcome, Explorer!</h1>
      <div className="flex flex-col lg:flex-row gap-6">
        
        {/* Sidebar Dropdown Navigation */}
        <div className="lg:w-1/4">
          <label htmlFor="section-select" className="block text-sm font-medium mb-2">Navigate</label>
          <select
            id="section-select"
            className="w-full border rounded px-3 py-2"
            value={selectedSection}
            onChange={(e) => setSelectedSection(e.target.value)}
          >
            <option value="planner">🗺️ Adventure Planner</option>
            <option value="tracker">✅ Park Tracker</option>
            <option value="packing">🎒 Packing List</option>
            <option value="bookshelf">📚 Bookshelf</option>
          </select>
        </div>

        {/* Main Section Content */}
        <div className="lg:w-3/4 bg-white shadow-md rounded-lg p-6">
          {renderSectionContent()}
        </div>
      </div>
    </div>
  );
};

export default MyParks;