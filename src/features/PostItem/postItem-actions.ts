import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { AddPostType } from '../Posts/posts-api';

import { postAPI } from './postItem-api';

export const getPost = createAsyncThunk(
  'post/getPost',
  async (id: string, { rejectWithValue }) => {
    const res = await postAPI.getPost(id);

    try {
      return res;
    } catch (e) {
      return rejectWithValue(null);
    }
  },
);

export const editPost = createAsyncThunk(
  'post/editPost',
  async (param: { data: AddPostType; id: string }, { rejectWithValue }) => {
    const res = await postAPI.editPost({ data: param.data, id: param.id });

    try {
      return { res };
    } catch (e) {
      if (axios.isAxiosError(e)) return rejectWithValue(e.message);
    }
  },
);
