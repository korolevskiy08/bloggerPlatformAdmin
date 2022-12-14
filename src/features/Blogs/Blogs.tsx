import React, { FC, useEffect } from 'react';

import { CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch } from '../../common/hooks/useAppDispatch';
import { useAppSelector } from '../../common/hooks/useAppSelector';
import { Path } from '../../common/Routes';
import { Button } from '../../layout/Button/Button';
import style from '../../layout/global.module.css';
import { TitleComponent } from '../../layout/TitleComponent/TitleComponent';

import BlogItem from './BlogItem/BlogItem';
import { getBlogs } from './blogs-actions';
import styles from './blogs.module.css';

export const Blogs: FC = () => {
  const dispatch = useAppDispatch();
  const blogs = useAppSelector(state => state.blogs);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getBlogs());
  }, []);

  const navigateNewBlog = (): void => {
    navigate(Path.NewBlog);
  };

  return (
    <div className={styles.blogsBlock}>
      <div className={styles.container}>
        <TitleComponent title="Blogs" />
        <div className={styles.addBlogBlock}>
          <Button onclick={navigateNewBlog} styleButton={style.button}>
            Add blog
          </Button>
        </div>
        {blogs.status === 'loading' ? (
          <div className={style.loader}>
            <CircularProgress color="inherit" />
          </div>
        ) : (
          <div>
            {blogs.blogs.map(el => {
              return (
                <BlogItem
                  createdAt={el.createdAt}
                  name={el.name}
                  key={el.id}
                  id={el.id}
                  websiteUrl={el.websiteUrl}
                  description={el.description}
                />
              );
            })}
            <div className={style.buttonBlock}>
              <Button onclick={() => {}} styleButton={styles.buttonShowMore}>
                Show more
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
