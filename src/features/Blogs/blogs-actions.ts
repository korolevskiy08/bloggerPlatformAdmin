import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { blogsAPI, NewBlogType } from './blogs-api';

export const getBlogs = createAsyncThunk(
  'blogs/getBlogs',
  async (_, { rejectWithValue }) => {
    try {
      const res = await blogsAPI.getBlogs();

      return res;
    } catch (e) {
      if (axios.isAxiosError(e)) return rejectWithValue(e.message);
    }
  },
);

export const deleteBlog = createAsyncThunk(
  'blogs/deleteBlog',
  async (id: string, { rejectWithValue }) => {
    await blogsAPI.removeBlog(id);

    try {
      return { id };
    } catch (e) {
      if (axios.isAxiosError(e)) return rejectWithValue(e.message);
    }
  },
);

export const addNewBlog = createAsyncThunk(
  'blogs/addNewBlog',
  async (data: NewBlogType, { rejectWithValue }) => {
    const res = await blogsAPI.newBlog(data);

    try {
      return res;
    } catch (e) {
      if (axios.isAxiosError(e)) return rejectWithValue(e.message);
    }
  },
);
