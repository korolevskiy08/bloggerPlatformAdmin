import { instance } from '../../common/api-instance/instance';

import { AddUserType, RequestUsersType, UserType } from './usersType';

export const usersAPI = {
  getUsers() {
    return instance.get<RequestUsersType>('users');
  },
  removeUser(id: string) {
    return instance.delete(`users/${id}`);
  },
  addUser(data: AddUserType) {
    return instance.post<UserType>('users', data);
  },
};
