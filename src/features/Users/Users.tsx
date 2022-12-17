import React, { FC, useEffect, useState } from 'react';

import { AddUserModal } from '../../common/Components/Modals/AddUserModal/AddUserModal';
import { useAppDispatch } from '../../common/hooks/useAppDispatch';
import { Button } from '../../layout/Button/Button';
import style from '../../layout/global.module.css';
import { TitleComponent } from '../../layout/TitleComponent/TitleComponent';

import { getUsers } from './users-actions';
import styles from './users.module.css';
import { UsersTable } from './UsersTable/UsersTable';

export const Users: FC = () => {
  const [openAddUserModal, setOpenDeleteUserModal] = useState(false);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <div className={styles.usersContainer}>
      <TitleComponent title="Users" />
      <div className={styles.addUser}>
        <Button styleButton={style.button} onclick={() => setOpenDeleteUserModal(true)}>
          Add user
        </Button>
      </div>
      <UsersTable />
      <AddUserModal
        isOpen={openAddUserModal}
        onClose={() => setOpenDeleteUserModal(false)}
        title="Add user"
      />
    </div>
  );
};
