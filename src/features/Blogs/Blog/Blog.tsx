import React, { FC } from 'react';

import { useNavigate } from 'react-router-dom';

import { useAppDispatch } from '../../../common/hooks/useAppDispatch';
import imageBlog from '../../../common/images/Gull_portrait_ca_usa.jpg';
import { Path } from '../../../common/Routes';
import { deleteBlog } from '../blogs-actions';
import { Settings } from '../Settings/Settings';

import styles from './Blog.module.css';

type BlogType = {
  name: string;
  id: string;
  websiteUrl: string;
  createdAt: string;
  description: string;
};

const Blog: FC<BlogType> = ({ name, id, websiteUrl, createdAt, description }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const navigateBlogItem = (event: React.MouseEvent<HTMLElement>): void => {
    event.stopPropagation();
    navigate(`/Blog/${id}`);
  };

  const deleteItemHandler = (): void => {
    dispatch(deleteBlog(id));
  };

  const navigateEditBlog = (): void => {
    navigate(Path.EditBlog, {
      state: {
        id,
        name,
        websiteUrl,
        description,
      },
    });
  };

  return (
    <div className={styles.blogBlock}>
      <div className={styles.blogItem}>
        <div className={styles.avatarBlogs}>
          <img src={imageBlog} alt="avatar" />
        </div>
        <div className={styles.descriptionBlock}>
          <h3
            onClick={navigateBlogItem}
            role="presentation"
            className={`titleName ${styles.titleBlog}`}
          >
            {name}
          </h3>
          <div>
            <p>Blog creation date: {createdAt?.slice(0, 10)}</p>
          </div>
          <p className={`titleName ${styles.youTube}`}>
            Website: <a href={websiteUrl}>{websiteUrl}</a>
          </p>
          <p className="titleName">{description}</p>
        </div>
        <Settings
          navigateEditBlog={navigateEditBlog}
          deleteItemHandler={deleteItemHandler}
          textModals="Are you sure want to delete this blog?"
          titleModals="Delete a blog"
        />
      </div>
    </div>
  );
};

export default Blog;
