import React, { FC, useState } from 'react';

import { TableCell, TableRow } from '@mui/material';

import { DeleteModal } from '../../../../common/Components/Modals/DeleteModal/DeleteModal';
import { useAppDispatch } from '../../../../common/hooks/useAppDispatch';
import { ReactComponent as DeleteSVG } from '../../../../common/icons/Delete.svg';
import { deleteUser } from '../../users-actions';

import styles from './usersTableRow.module.css';

type UsersTableRowType = {
  createdAt: string;
  email: string;
  id: string;
  login: string;
};

export const UsersTableRow: FC<UsersTableRowType> = ({ id, login, email, createdAt }) => {
  const [openDeleteModal, setDeleteModal] = useState(false);
  const dispatch = useAppDispatch();

  const deleteUserHandler = (): void => {
    dispatch(deleteUser(id));
  };

  return (
    <TableRow>
      <TableCell>{login} </TableCell>
      <TableCell>{email} </TableCell>
      <TableCell>{id} </TableCell>
      <TableCell>{createdAt} </TableCell>
      <TableCell>
        <DeleteSVG className={styles.delete} onClick={() => setDeleteModal(true)} />
      </TableCell>
      <DeleteModal
        isOpen={openDeleteModal}
        onClose={() => setDeleteModal(false)}
        deleteItem={deleteUserHandler}
        textModals="Ara you sure want to delete this users?"
        title="Delete Users"
      />
    </TableRow>
  );
};
