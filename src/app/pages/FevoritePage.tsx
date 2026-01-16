import { useState } from "react";
import { type Station } from "../../types/station";
import StationGrid from "../../components/StationGrid";
import BottomPlayer from "../../components/BottomPlayer";
import SearchBar from "../../components/SearchBar";
import { useAppSelector } from "../hooks";

function App() {

  const [search, setSearch] = useState("");
  const [current, setCurrent] = useState<Station | null>(null);
  const favurites = useAppSelector((state)=>state.favurite.value);


  const filteredStations = favurites.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase()) ||
    s.language?.toLowerCase().includes(search.toLowerCase())
  );
console.log(favurites);
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
