import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { AddPostType, postsAPI } from './posts-api';

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

export const createPost = createAsyncThunk(
  'posts/addPost',
  async (data: AddPostType, { rejectWithValue }) => {
    const res = await postsAPI.addPost(data);

    try {
      return res;
    } catch (e) {
      if (axios.isAxiosError(e)) return rejectWithValue(e.message);
    }
  },
);
