import React, { FC } from 'react';

import { useAppSelector } from '../../../common/hooks/useAppSelector';

import { UsersTableHead } from './UsersTableHead/UsersTableHead';
import { UsersTableRow } from './UsersTableRow/UsersTableRow';

export const UsersTable: FC = () => {
  const users = useAppSelector(state => state.users.users);

  return (
    <div>
      <UsersTableHead />
      {users.map(el => (
        <UsersTableRow
          key={el.id}
          id={el.id}
          createdAt={el.createdAt}
          email={el.email}
          login={el.login}
        />
      ))}
    </div>
  );
};
