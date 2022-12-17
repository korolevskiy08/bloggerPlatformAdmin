import React, { FC } from 'react';

import { useFormik } from 'formik';

import { addNewUser } from '../../../../features/Users/users-actions';
import { AddUserType } from '../../../../features/Users/usersType';
import { Button } from '../../../../layout/Button/Button';
import style from '../../../../layout/global.module.css';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { validateAddUser } from '../../../hooks/validateAddUser';
import { BasicModal } from '../BasicModal/BasicModal';

import styles from './addUserModal.module.css';

export type AddUserFormType = {
  login?: string;
  password?: string;
  email?: string;
};

type AddUserModalType = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
};

export const AddUserModal: FC<AddUserModalType> = ({ isOpen, onClose, title }) => {
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      login: '',
      password: '',
      email: '',
    } as AddUserType,
    validate: values => validateAddUser(values),
    onSubmit: values => {
      dispatch(
        addNewUser({
          email: values.email,
          login: values.login,
          password: values.password,
        }),
      ).then(() => {
        onClose();
      });
    },
  });

  return (
    <BasicModal open={isOpen} onClose={onClose} title={title} className={styles.content}>
      <form onSubmit={formik.handleSubmit}>
        <div className={styles.container}>
          <p className={`${style.text} ${styles.text}`}>Specify: Email of the user</p>
          <input {...formik.getFieldProps('email')} type="text" />
          {formik.touched.email
            ? formik.errors.email && (
                <div style={{ color: 'red' }}>{formik.errors.email}</div>
              )
            : null}
          <p className={`${style.text} ${styles.text}`}>Username</p>
          <input {...formik.getFieldProps('login')} type="text" />
          {formik.touched.login
            ? formik.errors.login && (
                <div style={{ color: 'red' }}>{formik.errors.login}</div>
              )
            : null}
          <p className={`${style.text} ${styles.text}`}>Password</p>
          <input {...formik.getFieldProps('password')} type="password" />
          {formik.touched.password
            ? formik.errors.password && (
                <div style={{ color: 'red' }}>{formik.errors.password}</div>
              )
            : null}
        </div>
        <div className={styles.addUser}>
          <Button type="submit" styleButton={style.button} onclick={() => {}}>
            Add user
          </Button>
        </div>
      </form>
    </BasicModal>
  );
};
