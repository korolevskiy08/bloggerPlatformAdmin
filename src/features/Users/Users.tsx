import React, { FC } from 'react';

import { Button } from '../../layout/Button/Button';
import style from '../../layout/global.module.css';
import { TitleComponent } from '../../layout/TitleComponent/TitleComponent';

import styles from './users.module.css';

export const Users: FC = () => {
  return (
    <div className={styles.usersContainer}>
      <TitleComponent title="Users" />
      <div className={styles.addUser}>
        <Button styleButton={style.button} onclick={() => {}}>
          Add user
        </Button>
      </div>
    </div>
  );
};
