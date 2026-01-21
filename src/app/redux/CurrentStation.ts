import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Station } from "../../types/station";

interface CurrentStation {
  value: Station | null;
}

const initialState: CurrentStation = {
  value: null,
};

const CurrentStation = createSlice({
  name: "currentstation",
  initialState,
  reducers: {
    addToCurrent: (state, action: PayloadAction<Station>) => {
      state.value = action.payload;
    },
  },
});

export const { addToCurrent } = CurrentStation.actions;

export default CurrentStation.reducer;
