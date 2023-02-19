import _ from "lodash"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { BookTypes } from "@/types/book.types"
import { RootState, BookState } from "@/types/store.types"

const name = "book"

const initialState: BookState = {
  books: [],
  isNoData: true,
  isLoading: false,
}

export const bookSlice = createSlice({
  name,
  initialState,
  reducers: {
    addBooks(state, action: PayloadAction<Array<BookTypes>>) {
      const books: Array<BookTypes> = action.payload
      state.books = _.reduce(
        books,
        (bookList: Array<BookTypes>, book: BookTypes) => ({
          ...bookList,
          [book.id]: book,
        }),
        [...state.books]
      )
      if (state.books.length > 0) state.isNoData = false
    },
    clearBooks(state) {
      state.books = []
      state.isNoData = true
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload
    },
  },
})

export const bookSliceActions = bookSlice.actions

export const getBooks = (state: RootState) => _.valuesIn(state[name].books)
export const isNoBookData = (state: RootState) => state[name].isNoData
