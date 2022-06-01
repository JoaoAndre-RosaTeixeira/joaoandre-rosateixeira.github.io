
export interface PokemonsApi<T> {
  results: Array<T>;
  count: number
  next: string | undefined
  previous: string | undefined
}
