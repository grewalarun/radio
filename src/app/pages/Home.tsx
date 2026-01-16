import { useEffect, useState } from "react";
import fetchIndianStations  from "../../services/radioApi";
import { type Station } from "../../types/station";
import StationGrid from "../../components/StationGrid";
import BottomPlayer from "../../components/BottomPlayer";
import SearchBar from "../../components/SearchBar";

function App() {
  const [search, setSearch] = useState("");
  const [current, setCurrent] = useState<Station | null>(null);

  const stations = fetchIndianStations();

  const filteredStations = stations.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase()) ||
    s.language?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="h-screen flex flex-col">
      {/* Top Search */}
      
      <SearchBar value={search} onChange={setSearch} />

      {/* Station Grid */}
      <main className="flex-1 overflow-y-auto pb-28 px-4">
        <StationGrid
          stations={filteredStations}
          onSelect={setCurrent}
          selected={current}
        />
      </main>

      {/* Fixed Player */}
      <BottomPlayer station={current} />
    </div>
  );
}

export default App;
