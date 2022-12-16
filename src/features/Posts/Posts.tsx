import React, { FC, useEffect, useState } from 'react';

import { CircularProgress } from '@mui/material';

import { CreatePostModal } from '../../common/Components/Modals/CreatePostModal/CreatePostModal';
import { useAppDispatch } from '../../common/hooks/useAppDispatch';
import { useAppSelector } from '../../common/hooks/useAppSelector';
import { Button } from '../../layout/Button/Button';
import style from '../../layout/global.module.css';
import { TitleComponent } from '../../layout/TitleComponent/TitleComponent';

import { PostItem } from './PostItem/PostItem';
import { createPost, getPosts } from './posts-actions';
import styles from './posts.module.css';

export const Posts: FC = () => {
  const [openCreatePostModal, setCreatePostModal] = useState(false);
  const dispatch = useAppDispatch();
  const posts = useAppSelector(state => state.posts);

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  const addPost = (title: string, blogId: string, content: string): void => {
    console.log(blogId);
    dispatch(
      createPost({
        title,
        blogId,
        content,
        shortDescription: 'фываоыва',
      }),
    ).then(() => {
      setCreatePostModal(false);
    });
  };

  return (
    <div className={styles.postsBlock}>
      <TitleComponent title="Posts" />
      <div className={styles.addPostButton}>
        <Button onclick={() => setCreatePostModal(true)} styleButton={style.button}>
          Add post
        </Button>
      </div>
      <div className={styles.selectBlock} />
      {posts.status === 'loading' ? (
        <div className={style.loader}>
          <CircularProgress color="inherit" />
        </div>
      ) : (
        <ul className={styles.postContainer}>
          {posts.posts.map(el => {
            return (
              <li key={el.id}>
                <PostItem
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
        <Button onclick={() => {}} styleButton={styles.buttonShowMore}>
          Show more
        </Button>
      </div>
      <CreatePostModal
        createItem={addPost}
        isOpen={openCreatePostModal}
        titleModal="Add post"
        onClose={() => setCreatePostModal(false)}
      />
    </div>
  );
};
