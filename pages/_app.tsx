import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'loowis-component-library/dist/index.css';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
