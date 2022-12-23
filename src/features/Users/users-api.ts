import { instance } from '../../common/api-instance/instance';

import { AddUserType, RequestUsersType, UserParamType, UserType } from './usersType';

export const usersAPI = {
  getUsers(params: UserParamType) {
    return instance.get<RequestUsersType>('users', { params });
  },
  removeUser(id: string) {
    return instance.delete(`users/${id}`);
  },
  addUser(data: AddUserType) {
    return instance.post<UserType>('users', data);
  },
};
