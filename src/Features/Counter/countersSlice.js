import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: 1,
        value: 10
    },
    {
        id: 2,
        value: 10
    },
    {
        id: 3,
        value: 10
    },
    {
        id: 4,
        value: 10
    }
]

const countersSlice = createSlice({
    name: 'counters',
    initialState,
    reducers:{
        increment: (state, action) => {
            const counterIndex = state.findIndex(c => c.id === action.payload)
            state[counterIndex].value++
        },
        decrement: (state, action) => {
            const counterIndex = state.findIndex(c => c.id === action.payload && c.value > 0)
            state[counterIndex].value--
        }
    }
})


export default countersSlice.reducer;
export const {increment, decrement} = countersSlice.actions;


