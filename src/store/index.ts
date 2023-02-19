import { configureStore } from "@reduxjs/toolkit"
import { createWrapper } from "next-redux-wrapper"
import { authorSlice } from "./authorSlice"
import { bookSlice } from "./bookSlice"

export const store = configureStore({
  reducer: {
    [authorSlice.name]: authorSlice.reducer,
    [bookSlice.name]: bookSlice.reducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware: Function) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

const makeStore = () => store
export const storeWrapper = createWrapper(makeStore)
