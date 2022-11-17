import { createAsyncThunk } from '@reduxjs/toolkit';

import { blogsAPI } from './blogs-api';

export const getBlogs = createAsyncThunk(
  'blogs/getBlogs',
  async (_, { rejectWithValue }) => {
    try {
      const res = await blogsAPI.getBlogs();

      return res;
    } catch (e) {
      return rejectWithValue(null);
    }
  },
);
