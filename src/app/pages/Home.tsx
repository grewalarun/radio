import StationGrid from "../components/StationGrid";
import BottomPlayer from "../components/BottomPlayer";
import SearchBar from "../components/SearchBar";
import { useStations } from "../hooks/useStations";

function Home() {
  const {
    stations,
    status,
    search,
    setSearch,
    currentStation,
    setCurrentStation,
  } = useStations("bycountry", "india", 500, (state) => state.stations);
  console.log(stations);
  return (
    <div className="h-screen flex flex-col relative bg-white dark:bg-background-dark">
      {/* Top Search */}
      <SearchBar value={search} onChange={setSearch} />

      {/* Conditional Rendering based on Status */}
      <main className="flex-1 overflow-y-auto">
        {status === "loading" ? (
          <div className="flex justify-center items-center h-full">
            <h4 className="text-xl animate-pulse">Loading Stations...</h4>
          </div>
        ) : status === "failed" ? (
          <div className="text-center mt-20 text-red-500">
            Error loading stations. Please try again.
          </div>
        ) : (
          <StationGrid
            stations={stations}
            onSelect={setCurrentStation}
            selected={currentStation}
          />
        )}
      </main>
    </div>
  );
}
export default Home;
