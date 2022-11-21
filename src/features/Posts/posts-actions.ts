import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { postsAPI } from './posts-api';

export const getPosts = createAsyncThunk(
  'posts/getPosts',
  async (_, { rejectWithValue }) => {
    try {
      const res = await postsAPI.getPosts();

      return { posts: res.data.items };
    } catch (e) {
      return rejectWithValue(null);
    }
  },
);

export const deletePost = createAsyncThunk(
  'posts/deletePost',
  async (id: string, { rejectWithValue }) => {
    await postsAPI.removePost(id);

    try {
      return { id };
    } catch (e) {
      if (axios.isAxiosError(e)) return rejectWithValue(e.message);
    }
  },
);
