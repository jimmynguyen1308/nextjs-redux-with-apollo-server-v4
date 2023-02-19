import { configureStore } from "@reduxjs/toolkit"
import { createWrapper } from "next-redux-wrapper"

export const store = configureStore({
  reducer: {
    // add store reducers here
  },
  devTools: true,
  middleware: (getDefaultMiddleware: Function) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

const makeStore = () => store
export const storeWrapper = createWrapper(makeStore)
