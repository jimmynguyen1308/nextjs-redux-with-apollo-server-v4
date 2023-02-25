import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { AuthorTypes } from "@/types/author.types"
import { RootState, AuthorState } from "@/types/store.types"

const name = "author"

const initialState: AuthorState = {
  authors: [],
  authorsById: {},
  isNoData: true,
}

export const authorSlice = createSlice({
  name,
  initialState,
  reducers: {
    addAuthors(state, action: PayloadAction<Array<AuthorTypes>>) {
      const authors: Array<AuthorTypes> = action.payload
      if (authors.length > 0) state.isNoData = false
      state.authors = authors
      authors.forEach(
        (author: AuthorTypes) => (state.authorsById[author.id] = author)
      )
    },
    clearAuthors(state) {
      state.authors = []
      state.authorsById = {}
      state.isNoData = true
    },
  },
})

export const authorSliceActions = authorSlice.actions

export const getAuthors = (state: RootState) => state[name].authors
export const getAuthorsById = (state: RootState) => state[name].authorsById
export const isNoAuthorData = (state: RootState) => state[name].isNoData
