import { store } from "@/store"
import { BookTypes } from "./book.types"
import { AuthorTypes } from "./author.types"

export type RootState = ReturnType<typeof store.getState>

export type BookState = {
  books: Array<BookTypes>
  isNoData: boolean
  isLoading: boolean
}

export type AuthorState = {
  authors: Array<AuthorTypes>
  isNoData: boolean
  isLoading: boolean
}
