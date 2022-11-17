import React, { FC } from 'react';

import { Button } from '../../../../layout/Button/Button';
import style from '../../../../layout/global.module.css';

import styles from './deleteModals.module.css';

type DeleteBlogsType = {
  setOpenDeleteModal: (value: boolean) => void;
  deleteBlog: () => void;
};

export const DeleteBlogs: FC<DeleteBlogsType> = ({ setOpenDeleteModal, deleteBlog }) => {
  const closeModeHandler = (): void => {
    setOpenDeleteModal(false);
  };

  return (
    <>
      <div className={styles.background} />
      <div className={styles.deleteModalBlock}>
        <h2 className={`${style.titleName} ${styles.title}`}>Delete a blog</h2>
        <p className={`${style.titleName} ${styles.text}`}>
          Are you sure want to delete this blog?
        </p>
        <div className={styles.buttonBlock}>
          <Button title="Yes" onclick={deleteBlog} styleButton={styles.button} />
          <Button title="No" onclick={closeModeHandler} styleButton={styles.button} />
        </div>
      </div>
    </>
  );
};
