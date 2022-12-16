import React, { FC, useEffect } from 'react';

import { useAppDispatch } from '../../common/hooks/useAppDispatch';
import { Button } from '../../layout/Button/Button';
import style from '../../layout/global.module.css';
import { TitleComponent } from '../../layout/TitleComponent/TitleComponent';

import { getUsers } from './users-actions';
import styles from './users.module.css';
import { UsersTable } from './UsersTable/UsersTable';

export const Users: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <div className={styles.usersContainer}>
      <TitleComponent title="Users" />
      <div className={styles.addUser}>
        <Button styleButton={style.button} onclick={() => {}}>
          Add user
        </Button>
      </div>
      <UsersTable />
    </div>
  );
};
