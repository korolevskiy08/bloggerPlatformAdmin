import React, { FC } from 'react';

import { Button } from '../../../../layout/Button/Button';
import style from '../../../../layout/global.module.css';

import styles from './deleteModals.module.css';

type DeleteBlogsType = {
  setOpenDeleteModal: (value: boolean) => void;
  deleteItem: () => void;
  textModals: string;
  titleModals: string;
};

export const DeleteBlogs: FC<DeleteBlogsType> = ({
  setOpenDeleteModal,
  deleteItem,
  titleModals,
  textModals,
}) => {
  const closeModeHandler = (): void => {
    setOpenDeleteModal(false);
  };

  return (
    <>
      <div className={styles.background} />
      <div className={styles.deleteModalBlock}>
        <h2 className={`${style.titleName} ${styles.title}`}>{titleModals}</h2>
        <p className={`${style.titleName} ${styles.text}`}>{textModals}</p>
        <div className={styles.buttonBlock}>
          <Button title="Yes" onclick={deleteItem} styleButton={styles.button} />
          <Button title="No" onclick={closeModeHandler} styleButton={styles.button} />
        </div>
      </div>
    </>
  );
};
