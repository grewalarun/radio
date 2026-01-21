import { type Station } from "../../types/station";
import { FaStar, FaRegStar, FaPlayCircle } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "../hooks/storeHooks";
import { toggleFavorite } from "../redux/fevouriteSlice";
import { addToCurrent } from "../redux/CurrentStation";

interface Props {
  stations: Station[];
  onSelect: (station: Station) => void;
  selected: Station | null;
}

export default function StationGrid({ stations, onSelect, selected }: Props) {
  const dispatch = useAppDispatch();

  // ✅ Get favorites from Redux
  const favorites = useAppSelector((state) => state.favurite.value);

  // ✅ Same logic, but Redux-based
  const isFavorite = (station: Station) =>
    favorites.some((s) => s.stationuuid === station.stationuuid);

  const toggleFavoriteHandler = (e: React.MouseEvent, station: Station) => {
    e.stopPropagation(); // prevent station selection
    dispatch(toggleFavorite(station));
  };
  return (
    <div className="flex-1 overflow-y-auto p-8 custom-scrollbar pb-40">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold">Live Stations</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1">
            {stations.length > 0
              ? `${stations.length} Stations found  worldwide`
              : ""}
          </p>
        </div>
        {/* <div class="flex gap-2">
<button class="px-4 py-2 text-sm font-medium rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700">Recent</button>
<button class="px-4 py-2 text-sm font-medium rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700">Popular</button>
</div> */}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {stations.map((station) => {
          const isActive = selected?.stationuuid === station.stationuuid;
          const fav = isFavorite(station);

          return (
            <div
              key={station.stationuuid}
              onClick={() => dispatch(addToCurrent(station))}
              className={`
              group relative bg-white dark:bg-card-dark rounded-3xl p-5 border border-slate-200 dark:border-slate-700/50 shadow-xl transition-all hover:scale-105
              ${isActive ? " neon-border glass  " : ""}
            `}
            >
              <div className="relative mb-4">
                <img
                  className="w-full aspect-square object-cover rounded-2xl"
                  src={
                    station.favicon?.trim() ? station.favicon : "/default.svg"
                  }
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = "/default.svg";
                  }}
                  alt={station.name}
                />

                <div className="absolute inset-0 bg-primary/20 rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  {!isActive ? (
                    <span className="material-icons-round text-4xl text-white">
                      <FaPlayCircle />
                    </span>
                  ) : (
                    ""
                  )}
                </div>

                <div className="absolute top-2 right-2">
                  <button
                    className="p-2 bg-black/30 backdrop-blur-md rounded-full text-white hover:text-red-400 transition-colors"
                    onClick={(e) => toggleFavoriteHandler(e, station)}
                  >
                    <span className="material-icons-round text-xl">
                      {" "}
                      {fav ? <FaStar size={16} /> : <FaRegStar size={16} />}
                    </span>
                  </button>
                </div>
              </div>
              <h3 className="font-bold text-lg truncate">{station.name}</h3>
              <div className="flex items-center gap-2 mt-1">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <p className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-widest font-semibold">
                  {" "}
                  {station.language || "India"} • Live
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
