import { createSlice } from "@reduxjs/toolkit";

const stepSlice=createSlice({
    name:'step',
    initialState:{
        step :1
    },
    reducers:{
        stepincrement:(state)=>{
            state.step += 1
        },
        stepdecrement : (state)=>{
            state.step -= 1
        },
        changeStep:(state)=>{
            state.step = 2

        }
    }
})

export const {stepincrement , stepdecrement , changeStep} = stepSlice.actions;
export default stepSlice.reducer