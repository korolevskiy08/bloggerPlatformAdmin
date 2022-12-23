export type UserType = {
  createdAt: string;
  email: string;
  id: string;
  login: string;
};

export type RequestUsersType = {
  items: UserType[];
  page: number;
  pageSize: number;
  pagesCount: number;
  totalCount: number;
};

export type AddUserType = {
  login: string;
  password: string;
  email: string;
};

export type Status = 'idle' | 'loading' | 'succeeded' | 'failed';
export type SortByType = 'name' | 'createdAt';
export type SortDirectionType = 'asc' | 'desc';
