type Permission = {
  id: number;
  name: string;
};

type Store = {
  id: number;
  name: string;
};
export type UserModelData = {
  id?: number;
  login_id?: string;
  last_name: string;
  first_name: string;
  created_use?: string;
  updated_user?: string;
  created_at?: string;
  updated_at?: string;
  deleted_at?: string;
  permission_id?: number;
  permission?: Permission;
  staff_id?: number;
  stores?: Store[];
  area?: {
    area_id?: number;
    store_id?: number;
  };
  user_sales?: {
    rank_id?: number;
  };
};

export type UserModel = {
  data: UserModelData;
};
