import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { Station } from "../../../types/station";

export const fetchStations = createAsyncThunk(
  "stations/fetchStations",
  async () => {
    const res = await fetch(
      "http://de1.api.radio-browser.info/json/stations/bycountry/india"
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
