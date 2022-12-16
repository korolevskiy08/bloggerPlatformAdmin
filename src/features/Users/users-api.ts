import { instance } from '../../common/api-instance/instance';

import { RequestUsersType } from './usersType';

export const usersAPI = {
  getUsers() {
    return instance.get<RequestUsersType>('users');
  },
};
