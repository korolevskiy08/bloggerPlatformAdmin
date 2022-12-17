import React, { FC, useEffect, useState } from 'react';

import { CircularProgress } from '@mui/material';

import { AddUserModal } from '../../common/Components/Modals/AddUserModal/AddUserModal';
import { useAppDispatch } from '../../common/hooks/useAppDispatch';
import { useAppSelector } from '../../common/hooks/useAppSelector';
import { Button } from '../../layout/Button/Button';
import style from '../../layout/global.module.css';
import { TitleComponent } from '../../layout/TitleComponent/TitleComponent';

import { getUsers } from './users-actions';
import styles from './users.module.css';
import { UsersTable } from './UsersTable/UsersTable';

export const Users: FC = () => {
  const [openAddUserModal, setOpenDeleteUserModal] = useState(false);
  const status = useAppSelector(state => state.posts.status);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <div className={styles.usersContainer}>
      <TitleComponent title="Users" />
      {status === 'loading' ? (
        <div className={style.loader}>
          <CircularProgress color="inherit" />
        </div>
      ) : (
        <>
          {' '}
          <div className={styles.addUser}>
            <Button
              styleButton={style.button}
              onclick={() => setOpenDeleteUserModal(true)}
            >
              Add user
            </Button>
          </div>
          <UsersTable />
          <AddUserModal
            isOpen={openAddUserModal}
            onClose={() => setOpenDeleteUserModal(false)}
            title="Add user"
          />
        </>
      )}
    </div>
  );
};
