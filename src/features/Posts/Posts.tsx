import React, { FC, useEffect, useState } from 'react';

import { CircularProgress } from '@mui/material';

import { useAppDispatch } from '../../common/hooks/useAppDispatch';
import { useAppSelector } from '../../common/hooks/useAppSelector';
import { Button } from '../../layout/Button/Button';
import style from '../../layout/global.module.css';
import { TitleComponent } from '../../layout/TitleComponent/TitleComponent';

import { AddEditPost } from './AddEditPost/AddEditPost';
import { Post } from './Post/Post';
import { getPosts } from './posts-actions';
import styles from './posts.module.css';

export const Posts: FC = () => {
  const [addPostModal, setAddPostModal] = useState(false);
  const dispatch = useAppDispatch();
  const posts = useAppSelector(state => state.posts);

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  const showAddPostModal = (): void => {
    setAddPostModal(true);
  };

  return (
    <div className={styles.postsBlock}>
      <TitleComponent title="Posts" />
      <div className={styles.addPostButton}>
        <Button
          title="Add post"
          onclick={showAddPostModal}
          styleButton={style.addBlogButton}
        />
      </div>
      <div className={styles.selectBlock} />
      {addPostModal && (
        <div>
          <AddEditPost titleModal="Add post" />
        </div>
      )}
      {posts.status === 'loading' ? (
        <div className={style.loader}>
          <CircularProgress color="inherit" />
        </div>
      ) : (
        <ul className={styles.postContainer}>
          {posts.posts.map(el => {
            return (
              <li key={el.id}>
                <Post
                  key={el.id}
                  id={el.id}
                  blogName={el.blogName}
                  content={el.content}
                  createdAt={el.createdAt}
                />
              </li>
            );
          })}
        </ul>
      )}
      <div className={style.buttonBlock}>
        <Button
          title="Show more"
          onclick={() => {}}
          styleButton={styles.buttonShowMore}
        />
      </div>
    </div>
  );
};
