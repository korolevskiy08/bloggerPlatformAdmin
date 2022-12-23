import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { AppRootStateType } from '../../app/store';

import { usersAPI } from './users-api';
import { AddUserType } from './usersType';

export const getUsers = createAsyncThunk(
  'users/getUsers',
  async (_, { rejectWithValue, getState }) => {
    const params = getState() as AppRootStateType;

    try {
      const res = await usersAPI.getUsers(params.users.params);

      return res;
    } catch (e) {
      if (axios.isAxiosError(e)) return rejectWithValue(e.message);
    }
  },
);

export const deleteUser = createAsyncThunk(
  'users/deleteUser',
  async (id: string, { rejectWithValue }) => {
    await usersAPI.removeUser(id);
    try {
      return { id };
    } catch (e) {
      if (axios.isAxiosError(e)) return rejectWithValue(e.message);
    }
  },
);

export const addNewUser = createAsyncThunk(
  'users/addNewUser',
  async (data: AddUserType, { rejectWithValue }) => {
    const res = await usersAPI.addUser(data);

    try {
      return res;
    } catch (e) {
      if (axios.isAxiosError(e)) return rejectWithValue(e.message);
    }
  },
);
