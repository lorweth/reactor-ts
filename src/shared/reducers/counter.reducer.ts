import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 0,
  loading: false,
};

export const incrementAsync = createAsyncThunk(
  'counter/incrementAsync',
  async ({ count, delay }: { count: number; delay: number }) => {
    await new Promise(resolve => setTimeout(resolve, delay));
    return { count };
  }
);

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.count += 1;
    },
    decrement(state) {
      state.count -= 1;
    },
    incrementBy(state, action) {
      state.count += action.payload;
    },
    reset() {
      return initialState;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(incrementAsync.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.count += action.payload.count;
      });
  },
});

export const { increment, decrement, incrementBy, reset } = counterSlice.actions;

export default counterSlice.reducer;
