import React from "react"
import { Provider } from "react-redux"
import { storeWrapper } from "@/store"
import type { AppProps } from "next/app"
import "@/styles/globals.scss"

export default function App({ Component, pageProps, ...rest }: AppProps) {
  const { store, props } = storeWrapper.useWrappedStore(rest)
  return (
    <React.StrictMode>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </React.StrictMode>
  )
}
