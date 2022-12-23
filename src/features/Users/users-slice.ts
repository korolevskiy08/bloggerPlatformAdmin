import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { addNewUser, deleteUser, getUsers } from './users-actions';
import { SortByType, SortDirectionType, Status, UserType } from './usersType';

const slice = createSlice({
  name: 'users',
  initialState: {
    users: [] as UserType[],
    status: 'idle' as Status,
    error: null as null | string,
    page: 1,
    pageSize: 10,
    pageCount: 1,
    totalCount: 5,
    params: {
      pageNumber: 1,
      pageSize: 10,
      sortBy: 'createdAt' as SortByType,
      sortDirection: 'desc' as SortDirectionType,
      searchLoginTerm: null,
      searchEmailTerm: null,
    },
  },
  reducers: {
    setFilterUsers(
      state,
      action: PayloadAction<{
        pageNumber?: number;
        pageSize?: 10;
        sortBy?: SortByType;
        sortDirection?: SortDirectionType;
        searchLoginTerm?: null;
        searchEmailTerm?: null;
      }>,
    ) {
      state.params.pageNumber = action.payload.pageNumber || state.params.pageNumber;
      state.params.pageSize = action.payload.pageSize || state.params.pageSize;
      state.params.sortBy = action.payload.sortBy || state.params.sortBy;
      state.params.sortDirection =
        action.payload.sortDirection || state.params.sortDirection;
      state.params.searchLoginTerm =
        action.payload.searchLoginTerm || state.params.searchLoginTerm;
      state.params.searchEmailTerm =
        action.payload.searchEmailTerm || state.params.searchEmailTerm;
    },
  },
  extraReducers: builder => {
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.error = null;
      state.users = action.payload!.data.items;
      state.page = action.payload!.data.page;
      state.pageSize = action.payload!.data.pageSize;
      state.pageCount = action.payload!.data.pagesCount;
      state.totalCount = action.payload!.data.totalCount;
    });
    builder.addCase(deleteUser.fulfilled, (state, action) => {
      return {
        ...state,
        status: 'succeeded',
        error: null,

        users: state.users.filter(el => el.id !== action.payload!.id),
      };
    });
    builder.addCase(addNewUser.fulfilled, (state, action) => {
      return {
        ...state,
        status: 'succeeded',
        error: null,

        users: [action.payload!.data, ...state.users],
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
export const { setFilterUsers } = slice.actions;
