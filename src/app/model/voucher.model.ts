export interface Voucher{
  id: number,
  name: string,
  code: string
  is_apply_count: boolean
  max_apply_count: number
  discount_cash: number
  type: string
}