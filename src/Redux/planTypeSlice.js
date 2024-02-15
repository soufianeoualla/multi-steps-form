import { createSlice  } from "@reduxjs/toolkit";

const planSlice = createSlice({
    name:'plan',
    initialState:{
        yearly: false
    },
    reducers:{
        setYearly:(state)=>{
            if(state.yearly){
                state.yearly = false
            }else state.yearly = true
        }
    }
})

export const {setYearly } = planSlice.actions
export default planSlice.reducer