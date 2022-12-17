import { createSlice } from '@reduxjs/toolkit';

import { deleteUser, getUsers } from './users-actions';
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
    builder.addCase(deleteUser.fulfilled, (state, action) => {
      return {
        ...state,
        status: 'succeeded',
        error: null,

        users: state.users.filter(el => el.id !== action.payload!.id),
      };
    });
    builder.addMatcher(
      action => action.type.endsWith('pending'),
      state => {
        state.status = 'loading';
        state.error = null;
      },
    );
    builder.addMatcher(
      action => action.type.endsWith('fulfilled'),
      state => {
        state.status = 'succeeded';
        state.error = null;
      },
    );
    builder.addMatcher(
      action => action.type.endsWith('rejected'),
      (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      },
    );
  },
});

export const usersSlice = slice.reducer;
