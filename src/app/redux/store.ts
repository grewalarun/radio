import { configureStore } from "@reduxjs/toolkit";

import favurite from './fevouriteSlice';
import stationReducer from './StationSlice';
export const store = configureStore({
    reducer: {
    favurite: favurite ,
    stations: stationReducer   
    }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch