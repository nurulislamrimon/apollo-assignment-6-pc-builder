import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  components: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addAComponent: (state, action) => {
      if (
        state.components.find(
          (product) => product.category === action.payload.category
        )
      ) {
        state.components = state.components.filter(
          (product) => product.category !== action.payload.category
        );
      }
      state.components = [...state.components, action.payload];
    },
    removeAComponent: (state, action) => {
      state.components = state.components.filter(
        (product) => product.category !== action.payload.category
      );
    },
  },
});

export const { addAComponent, removeAComponent } = productSlice.actions;

export default productSlice.reducer;
