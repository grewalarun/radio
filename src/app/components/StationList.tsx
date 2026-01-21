import { type Station } from "../../types/station";

interface Props {
  stations: Station[];
  onSelect: (station: Station) => void;
}

export default function StationList({ stations, onSelect }: Props) {
  return (
    <div style={{ width: "40%", overflowY: "auto" }}>
      {stations.map((station) => (
        <div
          key={station.stationuuid}
          onClick={() => onSelect(station)}
          style={{
            display: "flex",
            alignItems: "center",
            padding: "10px",
            cursor: "pointer",
            borderBottom: "1px solid #ddd",
          }}
        >
          <img
            src={
              station.favicon !== "null"
                ? station.favicon?.trim()
                  ? station.favicon
                  : "/default.svg"
                : "/default.svg"
            }
            alt={station.name}
            width={40}
            height={40}
            style={{ marginRight: "10px" }}
          />
          <div>
            <strong>{station.name}</strong>
            <div style={{ fontSize: "12px", color: "#666" }}>
              {station.language}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
