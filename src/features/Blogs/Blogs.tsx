import React, { FC, useEffect } from 'react';

import { CircularProgress } from '@mui/material';

import { useAppDispatch } from '../../common/hooks/useAppDispatch';
import { useAppSelector } from '../../common/hooks/useAppSelector';
import { Button } from '../../layout/Button/Button';
import style from '../../layout/global.module.css';
import { TitleComponent } from '../../layout/TitleComponent/TitleComponent';

import Blog from './Blog/Blog';
import { getBlogs } from './blogs-actions';
import styles from './Blogs.module.css';

export const Blogs: FC = () => {
  const dispatch = useAppDispatch();
  const blogs = useAppSelector(state => state.blogs);

  useEffect(() => {
    dispatch(getBlogs());
  }, []);

  return (
    <div className={styles.blogsBlock}>
      <div className={styles.container}>
        <TitleComponent title="Blogs" />
        <div className={styles.addBlogBlock}>
          <Button
            title="Add blog"
            onclick={() => {}}
            styleButton={styles.addBlogButton}
          />
        </div>
        {blogs.status === 'loading' ? (
          <div className={style.loader}>
            <CircularProgress color="inherit" />
          </div>
        ) : (
          <div>
            {blogs.blogs.map(el => {
              return (
                <Blog
                  name={el.name}
                  key={el.id}
                  id={el.id}
                  website={el.websiteUrl}
                  description={el.description}
                />
              );
            })}
            <div className={style.buttonBlock}>
              <Button
                title="Show more"
                onclick={() => {}}
                styleButton={styles.buttonShowMore}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
