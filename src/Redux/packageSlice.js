import { createSlice } from "@reduxjs/toolkit";

const packageSlice = createSlice({
  name: "package",
  initialState: {
    plan: [],
    addOns: [],
    totalPrice: 0,
  },
  reducers: {
    choosenPlan: (state, action) => {
      state.plan.push(action.payload);
      state.totalPrice += parseFloat(state.plan.map((item) => item.price));
    },
    choosenAddOns: (state, action) => {
      state.addOns.push(action.payload);
      state.totalPrice += parseFloat(
        state.addOns.map((item) => item.map((addon) => addon.price))
      );
    },
    stepChenged: (state) => {
        state.plan= []
        state.addOns = []
        state.totalPrice = 0

    },
  },
});
export const { choosenPlan, choosenAddOns ,stepChenged } = packageSlice.actions;
export default packageSlice.reducer;
