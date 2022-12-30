import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const STATUS = {
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
};

const productSlice = createSlice({
  name: "product",
  initialState: {
    Data: [],
    stutus: STATUS.IDLE,
  },
  reducers: {
    // setProducts(state, action) {
    //   state.Data = action.payload;
    // },
    // setStatus(state, action) {
    //   state.stutus = action.payload;
    // },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchproducts.pending, (state, action) => {
        state.stutus = STATUS.LOADING;
      })

      .addCase(fetchproducts.fulfilled, (state, action) => {
        state.Data = action.payload;
        state.stutus = STATUS.IDLE;
      })
      .addCase(fetchproducts.rejected, (state, action) => {
        state.stutus = STATUS.ERROR;
      });
  },
});
// export const { setProducts, setStatus } = productSlice.actions;
export default productSlice.reducer;

// createAsyncThunk
export const fetchproducts = createAsyncThunk("product/fetch", async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  return data;
});

// export function fetchproducts() {
//   return async function fetchproductthunk(dispatch, getstate) {
//     dispatch(setStatus(STATUS.LOADING));
//     try {
//       const res = await fetch("https://fakestoreapi.com/products");
//       const data = await res.json();
//       dispatch(setProducts(data));
//       dispatch(setStatus(STATUS.IDLE));
//     } catch (error) {
//       console.log(error);
//       dispatch(setStatus(STATUS.ERROR));
//     }
//   };
// }
