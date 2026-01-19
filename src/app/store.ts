import { configureStore } from "@reduxjs/toolkit";
import cc from './features/counter/counterSlice';
import favurite from './features/counter/fevouriteSlice';
import stationReducer from './features/counter/StationSlice';
export const store = configureStore({
    reducer: {
    counter: cc ,
    favurite: favurite ,
    stations: stationReducer   
    }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch