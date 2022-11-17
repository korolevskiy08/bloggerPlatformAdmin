import { createAsyncThunk } from '@reduxjs/toolkit';

import { getBlogs } from '../Blogs/blogs-actions';

import { blogAPI } from './blogItem-api';

export const getBlog = createAsyncThunk(
  'blog/getBlog',
  async (id: string, { rejectWithValue }) => {
    const res = await blogAPI.getBlog(id);

    try {
      return res;
    } catch (e) {
      return rejectWithValue(null);
    }
  },
);

export const deleteBlog = createAsyncThunk(
  'blog/deleteBlog',
  async (id: string, { dispatch, rejectWithValue }) => {
    await blogAPI.removeBlog(id);

    try {
      dispatch(getBlogs());

      return { id };
    } catch (e) {
      return rejectWithValue(null);
    }
  },
);
