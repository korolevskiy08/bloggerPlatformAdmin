import { AddUserFormType } from '../Components/Modals/AddUserModal/AddUserModal';

export const validateAddUser = (values: any): AddUserFormType => {
  const emailLength = 2;
  const passwordLength = 8;
  const errors: AddUserFormType = {};

  if (!values.login) {
    errors.login = 'Required';
  } else if (values.login.length < emailLength) {
    errors.login = 'Must be 2 characters or less';
  }

  if (!values.password) {
    errors.password = 'Required';
  } else if (values.password.length < passwordLength) {
    errors.password = 'Must be 8 characters or less';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  return errors;
};
