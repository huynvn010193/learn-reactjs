import userApi from 'api/userApi';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const register = createAsyncThunk('users/register', async (payload) => {
  // call API to register
  const data = await userApi.register(payload);
  // save data local storage
  localStorage.setItem('access_token', data.jwt);
  localStorage.setItem('user', JSON.stringify(data.user));
  // return user data
  return data.user;
});

const userSlice = createSlice({
  name: 'user',
  initialState: {
    current: {},
    settings: {},
  },
  reducers: {},
  extraReducers: {
    [register.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
  },
});

const { reducer } = userSlice;
export default reducer;
