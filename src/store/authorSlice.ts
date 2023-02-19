import _ from "lodash"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { AuthorTypes } from "@/types/author.types"
import { RootState, AuthorState } from "@/types/store.types"

const name = "author"

const initialState: AuthorState = {
  authors: [],
  isNoData: true,
  isLoading: false,
}

export const authorSlice = createSlice({
  name,
  initialState,
  reducers: {
    addAuthors(state, action: PayloadAction<Array<AuthorTypes>>) {
      const authors: Array<AuthorTypes> = action.payload
      state.authors = _.reduce(
        authors,
        (bookList: Array<AuthorTypes>, book: AuthorTypes) => ({
          ...bookList,
          [book.id]: book,
        }),
        [...state.authors]
      )
      if (state.authors.length > 0) state.isNoData = false
    },
    clearAuthors(state) {
      state.authors = []
      state.isNoData = true
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload
    },
  },
})

export const authorSliceActions = authorSlice.actions

export const getAuthors = (state: RootState) => _.valuesIn(state[name].authors)
export const isNoAuthorData = (state: RootState) => state[name].isNoData
