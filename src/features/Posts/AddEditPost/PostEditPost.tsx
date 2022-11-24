import React, { FC } from 'react';

import titleImg from '../../../common/images/pexels-photo-268533.webp';

import styles from './PostEditModal.module.css';

type PostEditPostType = {
  titleModal: string;
};

export const PostEditPost: FC<PostEditPostType> = ({ titleModal }) => {
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
      </div>
    </>
  );
};
