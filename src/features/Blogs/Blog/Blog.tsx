import React, { FC } from 'react';

import { useNavigate } from 'react-router-dom';

import { useAppDispatch } from '../../../common/hooks/useAppDispatch';
import imageBlog from '../../../common/images/Gull_portrait_ca_usa.jpg';
import { deleteBlog } from '../blogs-actions';
import { Settings } from '../Settings/Settings';

import styles from './Blog.module.css';

type BlogType = {
  name: string;
  id: string;
  description: string;
  date?: string;
};

const Blog: FC<BlogType> = ({ name, id, description, date }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const navigateBlogItem = (event: React.MouseEvent<HTMLElement>): void => {
    event.stopPropagation();
    navigate(`/Blog/${id}`);
  };

  const deleteItemHandler = (): any => {
    dispatch(deleteBlog(id));
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
          {date ? (
            <div>
              <p>Blog creation date: {date?.slice(0, 10)}</p>
            </div>
          ) : (
            ''
          )}
          <div className={styles.youTubeBlock}>
            <p className={`titleName ${styles.youTube}`}>YouTube:</p> {description}
          </div>
        </div>
        <Settings
          deleteItemHandler={deleteItemHandler}
          textModals="Are you sure want to delete this blog?"
          titleModals="Delete a blog"
        />
      </div>
    </div>
  );
};

export default Blog;
