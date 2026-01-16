import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface CounterSlice {
    value: number
}

const initialState:CounterSlice ={
    value:0
}

const counterSlice = createSlice ({
    name:'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state)=> {
            state.value -= 1
        },
        incrementByAmount: (state, action:PayloadAction<number>)=> {
            state.value += action.payload
        },
reset: (state)=> {
            state.value = initialState.value
        }
    }
})
export const {increment, decrement, incrementByAmount, reset} = counterSlice.actions;
export default counterSlice.reducer;