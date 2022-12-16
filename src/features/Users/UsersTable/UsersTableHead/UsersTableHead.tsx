import React, { FC } from 'react';

import { TableCell, TableHead, TableRow } from '@mui/material';

import styles from './UsersTableHead.module.css';

export const UsersTableHead: FC = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell className={styles.tableCell}>Username</TableCell>
        <TableCell className={styles.tableCell} align="left">
          Email
        </TableCell>
        <TableCell className={styles.tableCell} align="left">
          User ID
        </TableCell>
        <TableCell className={styles.tableCell} align="left">
          Date added
        </TableCell>
      </TableRow>
    </TableHead>
  );
};
