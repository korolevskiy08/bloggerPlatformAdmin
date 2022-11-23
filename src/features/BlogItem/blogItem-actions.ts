import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { NewBlogType } from '../Blogs/blogs-api';

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

export const editBlog = createAsyncThunk(
  'blog/editBlog',
  async (param: { data: NewBlogType; id: string }, { rejectWithValue }) => {
    const res = await blogAPI.editBlog({ data: param.data, id: param.id });

    try {
      return { res };
    } catch (e) {
      if (axios.isAxiosError(e)) return rejectWithValue(e.message);
    }
  },
);
