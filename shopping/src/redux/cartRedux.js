import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    reproducts: [],
    requantity: 0,
    retotal: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.requantity += 1;
      state.reproducts.push(action.payload.product);
      state.retotal += action.payload.reprice
    },
  },
});

export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;