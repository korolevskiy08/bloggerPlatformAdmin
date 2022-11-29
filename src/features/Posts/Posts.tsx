import React, { FC, useEffect, useState } from 'react';

import { CircularProgress } from '@mui/material';

import { useAppDispatch } from '../../common/hooks/useAppDispatch';
import { useAppSelector } from '../../common/hooks/useAppSelector';
import { Button } from '../../layout/Button/Button';
import style from '../../layout/global.module.css';
import { TitleComponent } from '../../layout/TitleComponent/TitleComponent';

import { AddEditPost } from './AddEditPost/AddEditPost';
import { Post } from './Post/Post';
import { createPost, getPosts } from './posts-actions';
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

  const addPost = (title: string, blogId: string, content: string): void => {
    dispatch(
      createPost({
        title,
        blogId,
        content,
        shortDescription: 'фываоыва',
      }),
    ).then(() => {
      setAddPostModal(!addPostModal);
    });
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
          <AddEditPost
            editMode
            titleModal="Add post"
            closeAddEditModal={showAddPostModal}
            addPost={addPost}
          />
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
                  name={el.title}
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
