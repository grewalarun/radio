import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Station } from "../../types/station";



/* ---------- Helpers ---------- */
const LOCAL_STORAGE_KEY = "favoriteStations";

const loadFavorites = (): Station[] => {
  try {
    const data = localStorage.getItem(LOCAL_STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

const saveFavorites = (favorites: Station[]) => {
  try {
    localStorage.setItem(
      LOCAL_STORAGE_KEY,
      JSON.stringify(favorites)
    );
  } catch {
    // ignore write errors
  }
};

interface FavoriteState {
  value: Station[];
}

const initialState: FavoriteState = {
  value: loadFavorites(),
};

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addToFavorite: (state, action: PayloadAction<Station>) => {
      const exists = state.value.some(
        (station) =>
          station.stationuuid === action.payload.stationuuid
      );

      if (!exists) {
        state.value.push(action.payload);
        saveFavorites(state.value)
      }
    },

    removeFromFavorite: (state, action: PayloadAction<Station>) => {
      state.value = state.value.filter(
        (station) =>
          station.stationuuid !== action.payload.stationuuid
      );
    },

    toggleFavorite: (state, action: PayloadAction<Station>) => {
      const exists = state.value.some(
        (station) =>
          station.stationuuid === action.payload.stationuuid
      );

      state.value = exists
        ? state.value.filter(
            (station) =>
              station.stationuuid !== action.payload.stationuuid
          )
        : [...state.value, action.payload];
         saveFavorites(state.value);
    },
    
  },
});

export const {
  addToFavorite,
  removeFromFavorite,
  toggleFavorite,
} = favoriteSlice.actions;

export default favoriteSlice.reducer;
