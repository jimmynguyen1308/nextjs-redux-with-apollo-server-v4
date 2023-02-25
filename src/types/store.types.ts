import { store } from "@/store"
import { BookTypes, BooksByIdTypes } from "./book.types"
import { AuthorTypes, AuthorsByIdTypes } from "./author.types"

export type RootState = ReturnType<typeof store.getState>

export type BookState = {
  books: Array<BookTypes>
  booksById: BooksByIdTypes
  isNoData: boolean
}

export type AuthorState = {
  authors: Array<AuthorTypes>
  authorsById: AuthorsByIdTypes
  isNoData: boolean
}
