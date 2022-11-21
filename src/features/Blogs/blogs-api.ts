import { instance } from '../../common/api-instance/instance';

export const blogsAPI = {
  getBlogs() {
    return instance.get('blogs');
  },
  removeBlog(id: string) {
    return instance.delete(`blogs/${id}`);
  },
};

export type BlogType = {
  createdAt: string;
  id: string;
  name: string;
  websiteUrl: string;
  description: string;
};
