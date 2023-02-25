import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { BookTypes } from "@/types/book.types"
import { RootState, BookState } from "@/types/store.types"

const name = "book"

const initialState: BookState = {
  books: [],
  booksById: {},
  isNoData: true,
}

export const bookSlice = createSlice({
  name,
  initialState,
  reducers: {
    addBooks(state, action: PayloadAction<Array<BookTypes>>) {
      const books: Array<BookTypes> = action.payload
      if (books.length > 0) state.isNoData = false
      state.books = books
      books.forEach((book: BookTypes) => (state.booksById[book.id] = book))
    },
    clearBooks(state) {
      state.books = []
      state.booksById = {}
      state.isNoData = true
    },
  },
})

export const bookSliceActions = bookSlice.actions

export const getBooks = (state: RootState) => state[name].books
export const getBooksById = (state: RootState) => state[name].booksById
export const isNoBookData = (state: RootState) => state[name].isNoData
