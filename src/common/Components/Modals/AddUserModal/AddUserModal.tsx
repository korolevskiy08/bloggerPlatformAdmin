import React, { FC } from 'react';

import { Button } from '../../../../layout/Button/Button';
import style from '../../../../layout/global.module.css';
import { BasicModal } from '../BasicModal/BasicModal';

import styles from './addUserModal.module.css';

type AddUserModalType = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
};

export const AddUserModal: FC<AddUserModalType> = ({ isOpen, onClose, title }) => {
  return (
    <BasicModal open={isOpen} onClose={onClose} title={title} className={styles.content}>
      <div className={styles.container}>
        <p className={`${style.text} ${styles.text}`}>Specify: Email of the user</p>
        <input type="text" />
        <p className={`${style.text} ${styles.text}`}>Username</p>
        <input type="text" />
        <p className={`${style.text} ${styles.text}`}>Password</p>
        <input type="password" />
      </div>
      <div className={styles.addUser}>
        <Button styleButton={style.button} onclick={() => {}}>
          Add user
        </Button>
      </div>
    </BasicModal>
  );
};
