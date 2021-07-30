import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import categoryApi from 'api/categoryApi';

export const categoryAct = createAsyncThunk('category/categoryAct', async (payload) => {
  const listCat = await categoryApi.getAll();
  return listCat.map((item) => ({
    id: item.id,
    name: item.name,
  }));
});

const categorySlice = createSlice({
  name: 'category',
  initialState: {
    category: [],
  },
  reducers: {},
  extraReducers: {
    [categoryAct.fulfilled]: (state, action) => {
      state.category = action.payload;
    },
  },
});

const { actions, reducer } = categorySlice;

export default reducer;
