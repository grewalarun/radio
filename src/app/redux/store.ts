import { configureStore } from "@reduxjs/toolkit";

import favurite from './fevouriteSlice';
import stationReducer from './StationSlice';
import currentReducer from './CurrentStation';
export const store = configureStore({
    reducer: {
    favurite: favurite ,
    stations: stationReducer,
    current: currentReducer 
    }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch