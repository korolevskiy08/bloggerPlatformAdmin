import React, { FC, useEffect, useState } from 'react';

import { Select } from '../../../common/Components/Select/Select';
import { useAppDispatch } from '../../../common/hooks/useAppDispatch';
import { useAppSelector } from '../../../common/hooks/useAppSelector';
import close from '../../../common/icons/close.svg';
import titleImg from '../../../common/images/pexels-photo-268533.webp';
import { Button } from '../../../layout/Button/Button';
import style from '../../../layout/global.module.css';
import { getBlogs } from '../../Blogs/blogs-actions';
import { BlogType } from '../../Blogs/blogs-api';

import styles from './addEditPost.module.css';

type PostEditPostType = {
  titleModal: string;
  setAddPostModal: (value: boolean) => void;
};

export const AddEditPost: FC<PostEditPostType> = ({ titleModal, setAddPostModal }) => {
  const blogs = useAppSelector(state => state.blogs);
  const [value, setValue] = useState<BlogType | null>(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getBlogs());
  }, []);

  useEffect(() => {
    setValue(blogs.blogs[0]);
  }, [blogs]);

  const closeModal = (): void => {
    setAddPostModal(false);
  };

  if (blogs === undefined || !value) {
    return null;
  }

  return (
    <>
      <div className={styles.background} />
      <div className={styles.modalBlock}>
        <div className={styles.titleBlock}>
          <h3 className={`titleName ${styles.title}`}>{titleModal}</h3>
          <img role="presentation" src={close} alt="close" onClick={closeModal} />
        </div>
        <div className={styles.titleImgBlock}>
          <img src={titleImg} alt="title img" />
        </div>
        <p className={`titleName ${styles.postName}`}>Post Name</p>
        <input type="text" className={styles.input} placeholder="Post Name" />
        <p className={`titleName ${styles.postName}`}>Blog</p>
        <div className={styles.select}>
          <Select blogs={blogs.blogs} onChange={setValue} value={value} />
        </div>
        <p className={`titleName ${styles.postName}`}>Description</p>
        <textarea className={styles.descriptionText} />
        <div className={styles.button}>
          <Button title="Publish" onclick={() => {}} styleButton={style.addBlogButton} />
        </div>
      </div>
    </>
  );
};
