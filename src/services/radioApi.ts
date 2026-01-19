import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { fetchStations } from "../app/features/counter/StationSlice";


export default function fetchIndianStations() {
  const dispatch = useAppDispatch();
  const stations = useAppSelector((s) => s.stations.data);
  const status = useAppSelector((s) => s.stations.status);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchStations());
    }
  }, [status, dispatch]);

 

  return stations;
}
