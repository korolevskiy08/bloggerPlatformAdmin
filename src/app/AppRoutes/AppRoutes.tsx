import React, { FC } from 'react';

import { Route, Routes } from 'react-router-dom';

import { Path } from '../../common/Routes';
import { Blog } from '../../features/Blog/Blog';
import { AddEditBlog } from '../../features/Blogs/AddEditBlog/AddEditBlog';
import { Blogs } from '../../features/Blogs/Blogs';
import { Post } from '../../features/Post/Post';
import { Posts } from '../../features/Posts/Posts';
import { Users } from '../../features/Users/Users';

export const AppRoutes: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Blogs />} />
      <Route path={Path.Blogs} element={<Blogs />} />
      <Route path={Path.Blog} element={<Blog />} />
      <Route path={Path.NewBlog} element={<AddEditBlog />} />
      <Route path={Path.EditBlog} element={<AddEditBlog editMode />} />
      <Route path={Path.Posts} element={<Posts />} />
      <Route path={Path.Post} element={<Post />} />
      <Route path={Path.Users} element={<Users />} />
    </Routes>
  );
};
