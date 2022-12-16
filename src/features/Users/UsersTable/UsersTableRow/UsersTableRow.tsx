import React, { FC } from 'react';

import { TableCell, TableRow } from '@mui/material';

import { ReactComponent as DeleteSVG } from '../../../../common/icons/Delete.svg';

type UsersTableRowType = {
  createdAt: string;
  email: string;
  id: string;
  login: string;
};

export const UsersTableRow: FC<UsersTableRowType> = ({ id, login, email, createdAt }) => {
  return (
    <TableRow>
      <TableCell>{login} </TableCell>
      <TableCell>{email} </TableCell>
      <TableCell>{id} </TableCell>
      <TableCell>{createdAt} </TableCell>
      <TableCell>
        <DeleteSVG />
      </TableCell>
    </TableRow>
  );
};
