// import { type Station } from "../types/station";

// const BASE_URL = "https://de1.api.radio-browser.info/json";







// export async function fetchIndianStations(): Promise<Station[]> {
//   const response = await fetch(`${BASE_URL}/stations/bycountry/India`);
//   if (!response.ok) {

//     throw new Error("Failed to fetch stations");
//   }
//   return response.json();
// }


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
