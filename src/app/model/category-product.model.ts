export interface Category_Product{
  id: number;
  userAdded: number;
  userUpdated: number;
  dateAdded: Date;
  dateUpdated: Date;
  name: string;
  parent_category_id?: any;
  is_delete: boolean
}
