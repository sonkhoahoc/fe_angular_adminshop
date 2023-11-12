export interface News{
  id: number,
  category_id: number,
  title: string,
  short_description: string,
  content: string,
  avatar: string,
  note: string,
  is_delete: boolean
  userAdded: number,
  userUpdated: number,
  dateAdded: Date,
  dateUpdated: Date
}
