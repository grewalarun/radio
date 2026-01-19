import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { Station } from "../../types/station";

export const fetchStations = createAsyncThunk(
  "stations/fetchStations",
  async ({ tag, country, limit }: { tag: string, country: string, limit: number }) => {
    const res = await fetch(
      `https://de1.api.radio-browser.info/json/stations/${tag}/${country}?limit=${limit}`
    );
    return (await res.json()) as Station[];
  }
);

interface StationState {
  data: Station[];
  status: "idle" | "loading" | "succeeded" | "failed";
}

const initialState: StationState = {
  data: [],
  status: "idle",
};

const stationSlice = createSlice({
  name: "stations",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStations.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchStations.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchStations.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default stationSlice.reducer;
