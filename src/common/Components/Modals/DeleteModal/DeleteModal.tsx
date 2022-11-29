import React, { FC } from 'react';

import { Button } from '../../../../layout/Button/Button';
import style from '../../../../layout/global.module.css';
import { BasicModal } from '../BasicModal/BasicModal';

import styles from './deleteModals.module.css';

type DeleteBlogsType = {
  isOpen: boolean;
  onClose: () => void;
  deleteItem: () => void;
  textModals: string;
  title: string;
};

export const DeleteModal: FC<DeleteBlogsType> = ({
  isOpen,
  deleteItem,
  title,
  textModals,
  onClose,
}) => {
  return (
    <BasicModal open={isOpen} onClose={onClose} title={title} className={styles.content}>
      <div className={styles.deleteModalBlock}>
        <p className={`${style.titleName} ${styles.text}`}>{textModals}</p>
        <div className={styles.buttonBlock}>
          <Button
            title="Yes"
            onclick={deleteItem}
            styleButton={`${style.button} ${styles.button}`}
          />
          <Button
            title="No"
            onclick={onClose}
            styleButton={`${style.button} ${styles.button}`}
          />
        </div>
      </div>
    </BasicModal>
  );
};
