import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const STATUS = {
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
};

const productsdetailsSlice = createSlice({
  name: "productsid",
  initialState: {
    Data: [],
    stutus: STATUS.IDLE,
  },
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchid.pending, (state, action) => {
        state.stutus = STATUS.LOADING;
      })

      .addCase(fetchid.fulfilled, (state, action) => {
        state.Data = action.payload;
        state.stutus = STATUS.IDLE;
      })
      .addCase(fetchid.rejected, (state, action) => {
        state.stutus = STATUS.ERROR;
      });
  },
});
export default productsdetailsSlice.reducer;

// createAsyncThunk
export const fetchid = createAsyncThunk("product/fetch", async () => {
  const res = await fetch("https://fakestoreapi.com/products/" + id);
  const data = await res.json();
  return data;
});
