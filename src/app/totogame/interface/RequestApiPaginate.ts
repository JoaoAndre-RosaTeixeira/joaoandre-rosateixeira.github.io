export interface RequestApiPaginate<T> {
  page: number
  itemsPerPage: number
  total: number
  totalPages: number
  limit: number
  items: Array<T>
}
