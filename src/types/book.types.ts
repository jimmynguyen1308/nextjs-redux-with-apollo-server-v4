export type BookTypes = {
  id: string
  name: string
  year: number | null
  author: string
  description: string | null
}

export type BooksByIdTypes = {
  [key: string]: BookTypes
}
