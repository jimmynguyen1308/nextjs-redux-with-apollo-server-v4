export type AuthorTypes = {
  id: string
  name: string
  gender: boolean
  nationality: string | null
  description: string | null
}

export type AuthorsByIdTypes = {
  [key: string]: AuthorTypes
}
