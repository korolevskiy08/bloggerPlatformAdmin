import React, { FC, useEffect, useState } from 'react';

import { Select } from '../../../common/Components/Select/Select';
import { useAppDispatch } from '../../../common/hooks/useAppDispatch';
import { useAppSelector } from '../../../common/hooks/useAppSelector';
import titleImg from '../../../common/images/pexels-photo-268533.webp';
import { getBlogs } from '../../Blogs/blogs-actions';

import styles from './PostEditModal.module.css';

type PostEditPostType = {
  titleModal: string;
};

export const PostEditPost: FC<PostEditPostType> = ({ titleModal }) => {
  const blogs = useAppSelector(state => state.blogs.blogs);
  const [value, setValue] = useState(blogs[0].name);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getBlogs());
  }, []);

  return (
    <>
      <div className={styles.background} />
      <div className={styles.modalBlock}>
        <div className={styles.titleBlock}>
          <h3 className={`titleName ${styles.title}`}>{titleModal}</h3>
        </div>
        <div className={styles.titleImgBlock}>
          <img src={titleImg} alt="title img" />
        </div>
        <p className={`titleName ${styles.postName}`}>Post Name</p>
        <input type="text" className={styles.input} placeholder="Post Name" />
        <p className={`titleName ${styles.postName}`}>Blog</p>
        <div>
          <Select blogs={blogs} onChange={setValue} value={value} />
        </div>
      </div>
    </>
  );
};
