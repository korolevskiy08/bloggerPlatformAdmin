import { createSlice } from '@reduxjs/toolkit';

import { getUsers } from './users-actions';
import { Status, UserType } from './usersType';

const slice = createSlice({
  name: 'users',
  initialState: {
    users: [] as UserType[],
    status: 'idle' as Status,
    error: null as null | string,
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.error = null;
      state.users = action.payload!.data.items;
    });
  },
});

export const usersSlice = slice.reducer;
