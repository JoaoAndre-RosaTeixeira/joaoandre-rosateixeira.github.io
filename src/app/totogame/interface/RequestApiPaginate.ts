export interface RequestApiPaginate<T> {
  page: number
  items_per_page: number
  total: number
  total_page: number
  items: Array<T>
}
