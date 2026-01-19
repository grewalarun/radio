import { type Station } from "../../types/station";

interface Props {
  station: Station | null;
}

export default function BottomPlayer({ station }: Props) {
  return (
    <div className="absolute bottom-10 left-2 lg:left-8 right-2 lg:right-8 h-24 glass bg-white/70 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 rounded-[32px] shadow-2xl z-30 md:flex items-center px-2 py:2 lg:px-8 gap-8">
      
      {/* Station Info */}
      <div className="flex items-center gap-3 min-w-16 md:min-w-72">
        <img
          src={station?.favicon?.trim() ? station.favicon : "/default.svg"}
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = "/default.svg";
          }}
          alt={station?.name || "Radio"}
          className="w-14 h-14 rounded-lg bg-gray-200"
        />
        <div className="overflow-hidden">
          <p className="font-semibold truncate">
            {station?.name || "Select a station"}
          </p>
          <p className="text-sm text-gray-500 truncate">
            {station?.language || "Live Radio"}
          </p>
        </div>
      </div>

      {/* Controls */}
      <div className="flex-1 max-w-2xl">
        {station ? (
          <audio
            controls
            autoPlay
            src={station.url}
            className="w-full"
          />
        ) : (
          <p className="text-gray-500 text-center">
            🎧 Choose a radio station to start listening
          </p>
        )}
      </div>

      {/* Meta */}
      <div className="hidden md:block text-sm text-gray-500 text-right min-w-7">
        {station && `${station.bitrate} kbps`}
      </div>
    </div>
  );
}
