import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { usersAPI } from './users-api';

export const getUsers = createAsyncThunk(
  'users/getUsers',
  async (_, { rejectWithValue }) => {
    try {
      const res = await usersAPI.getUsers();

      return res;
    } catch (e) {
      if (axios.isAxiosError(e)) return rejectWithValue(e.message);
    }
  },
);
