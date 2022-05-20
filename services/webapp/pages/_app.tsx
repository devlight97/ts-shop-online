import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ModelProvider, modelProvider } from 'models/model.provider'

function MyApp({ Component, pageProps }: AppProps) {
  return <ModelProvider value={{ ...modelProvider }}>
    <Component {...pageProps} />
  </ModelProvider>
}

export default MyApp
