import React, { FC } from 'react';

import { Route, Routes } from 'react-router-dom';

import { Path } from '../../common/Routes';
import { BlogItem } from '../../features/BlogItem/BlogItem';
import { AddEditBlog } from '../../features/Blogs/AddEditBlog/AddEditBlog';
import { Blogs } from '../../features/Blogs/Blogs';
import { PostItem } from '../../features/PostItem/PostItem';
import { Posts } from '../../features/Posts/Posts';

export const AppRoutes: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Blogs />} />
      <Route path={Path.Blogs} element={<Blogs />} />
      <Route path={Path.Blog} element={<BlogItem />} />
      <Route path={Path.NewBlog} element={<AddEditBlog />} />
      <Route path={Path.EditBlog} element={<AddEditBlog editMode />} />
      <Route path={Path.Posts} element={<Posts />} />
      <Route path={Path.Post} element={<PostItem />} />
    </Routes>
  );
};
