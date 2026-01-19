import { useEffect, useState, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/storeHooks";
import { fetchStations } from "../redux/StationSlice";
import { type Station } from "../../types/station";
import {type RootState} from "../redux/store"


interface StationSliceState {
  data: Station[];
  status: "idle" | "loading" | "succeeded" | "failed";
}

export const useStations = ( tag="bycountry",  country = "india", limit = 100, selector: (state: RootState) => StationSliceState) => {

  const dispatch = useAppDispatch();
  const { data: stations, status } = useAppSelector(selector);

  const [search, setSearch] = useState("");
  const [currentStation, setCurrentStation] = useState<Station | null>(null);

  // Fetch data on mount or when country/limit changes
  useEffect(() => {
    dispatch(fetchStations({ tag, country, limit }));
  }, [dispatch, country, limit]);

  // Derived State: Filtered list
  const filteredStations = useMemo(() => {
    const term = search.toLowerCase();
    return stations.filter((s:Station) =>
      s.name.toLowerCase().includes(term) ||
      (s.language && s.language.toLowerCase().includes(term))
    );
  }, [stations, search]);

  return {
    stations: filteredStations,
    status,
    search,
    setSearch,
    currentStation,
    setCurrentStation,
    totalCount: stations.length
  };
};