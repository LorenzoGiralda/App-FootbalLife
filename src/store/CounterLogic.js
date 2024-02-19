import { createSlice } from '@reduxjs/toolkit';


const variValue = {
    counter: 0,
    counter1: 5,
    counter2: 10    
    }


const CounterLogic = createSlice({

    name: 'counter',
    initialState:{
    value: variValue.counter    
    },

    reducers:{

        increment: (state) => {
        state.value += 1    
        },

        decrement: (state) => {
        state.value -= 1    
        },

        cancel: (state) => {
            state.value = 0   
            },

        incrementByPayload: (state, action) => {
        state.value += action.payload    
        }

    }

});


export const {increment, decrement, incrementByPayload, cancel} = CounterLogic.actions

export default CounterLogic.reducer