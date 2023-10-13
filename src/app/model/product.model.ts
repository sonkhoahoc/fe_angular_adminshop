export interface Product{
  id: number;
  category_id: number;
  name: string;
  price: number;
  views_count: number;
  stock_quantity: number;
  sold_quantity: number;
  userAdded: number;
  userUpdated: number;
  dateAdded: Date;
  dateUpdated: Date;
  description: string;
  is_delete: boolean
  avatar: string;
}
