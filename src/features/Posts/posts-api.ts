import { instance } from '../../common/api-instance/instance';

export const postsAPI = {
  getPosts() {
    return instance.get<PostType>('posts');
  },
  removePost(id: string) {
    return instance.delete(`posts/${id}`);
  },
};

export type ItemPostType = {
  blogId: string;
  blogName: string;
  content: string;
  createdAt: string;
  id: string;
  shortDescription: string;
  title: string;
};

export type PostType = {
  items: ItemPostType[];
  page: number;
  pageSize: number;
  pagesCount: number;
  totalCount: number;
};
