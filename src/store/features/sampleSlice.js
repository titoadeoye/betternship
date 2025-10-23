import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: 'Tito',
};

const sampleSlice = createSlice({
  name: 'sample',
  initialState,
  reducers: {
    updateName: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { updateName } = sampleSlice.actions;
export default sampleSlice.reducer;
