import { type Station } from "../../types/station";

interface Props {
  station: Station | null;
}

export default function Player({ station }: Props) {
  if (!station) {
    return (
      <div className="flex items-center justify-center h-full text-gray-500">
        Select a radio station to start listening 🎧
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto bg-amber-400 rounded-xl shadow-md p-6">
      <div className="flex items-center gap-4 mb-4">
        <img
          src={station.favicon?.trim() ? station.favicon : "/default.svg"}
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = "/default.svg";
          }}
          alt={station.name}
          className="w-16 h-16 rounded-xl bg-gray-200"
        />

        <div>
          <h2 className="text-2xl font-semibold">{station.name}</h2>
          <p className="text-sm text-gray-500">
            {station.language || "India"} • {station.bitrate} kbps
          </p>
        </div>
      </div>

      <audio
        controls
        autoPlay
        src={station.url}
        className="w-full mt-4"
      />
    </div>
  );
}
