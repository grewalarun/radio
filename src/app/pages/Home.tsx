import { useState } from "react";
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
    <div className="h-screen flex flex-col relative">
      {/* Top Search */}
      
      <SearchBar value={search} onChange={setSearch} />

      {/* Station Grid */}
     
        <StationGrid
          stations={filteredStations}
          onSelect={setCurrent}
          selected={current}
        />


      {/* Fixed Player */}
      <BottomPlayer station={current} />
    </div>
  );
}

export default App;
