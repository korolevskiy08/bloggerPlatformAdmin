import { instance } from '../../common/api-instance/instance';
import { AddPostType } from '../Posts/posts-api';

export const postAPI = {
  getPost(id: string) {
    return instance.get(`posts/${id}`);
  },
  editPost({ data, id }: EditPostType) {
    return instance.put(`posts/${id}`, data);
  },
};

export type EditPostType = {
  data: AddPostType;
  id: string;
};
