import { type Station } from "../types/station";
import { FaStar, FaRegStar } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { toggleFavorite } from "../app/features/counter/fevouriteSlice";


interface Props {
  stations: Station[];
  onSelect: (station: Station) => void;
  selected: Station | null;
}

export default function StationGrid({
  stations,
  onSelect,
  selected,
}: Props) {
  const dispatch = useAppDispatch();

  // ✅ Get favorites from Redux
  const favorites = useAppSelector(
    (state) => state.favurite.value
  );

  // ✅ Same logic, but Redux-based
  const isFavorite = (station: Station) =>
    favorites.some(
      (s) => s.stationuuid === station.stationuuid
    );

  const toggleFavoriteHandler = (
    e: React.MouseEvent,
    station: Station
  ) => {
    e.stopPropagation(); // prevent station selection
    dispatch(toggleFavorite(station));
  };
  return (
    <>
    <div className="container mt-4">
        <h3>{stations.length>0?`${stations.length} Stations found`:''}</h3>
     </div>
     <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-4">
        
     
      {stations.map((station) => {
        const isActive =
          selected?.stationuuid === station.stationuuid;
        const fav = isFavorite(station);

        return (
          <div
            key={station.stationuuid}
            onClick={() => onSelect(station)}
            className={`
              relative cursor-pointer rounded-xl bg-white p-4
              shadow-sm hover:shadow-md transition text-center
              ${isActive ? "ring-2 ring-orange-500" : ""}
            `}
          >
            {/* ⭐ Favorite Icon */}
            <span
              onClick={(e) => toggleFavoriteHandler(e, station)}
              className={`
                absolute top-2 right-2 p-1
                rounded-full transition
                ${
                  fav
                    ? "text-yellow-500"
                    : "text-gray-400 hover:text-yellow-400"
                }
              `}
            >
              {fav ? <FaStar size={16} /> : <FaRegStar size={16} />}
            </span>

            {/* Station Image */}
            <img
              src={station.favicon?.trim() ? station.favicon : "/default.svg"}
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src =
                  "/default.svg";
              }}
              alt={station.name}
              className="w-16 h-16 mx-auto mb-3 rounded-xl bg-gray-200"
            />

            {/* Station Info */}
            <p className="font-medium text-sm truncate">
              {station.name}
            </p>
            <p className="text-xs text-gray-400 truncate">
              {station.language || "India"}
            </p>
          </div>
        );
      })}
    </div>
    </>
  );
}
