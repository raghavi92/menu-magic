import Header from '@/components/layout/Header'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Script from 'next/script'

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Script src="https://accounts.google.com/gsi/client" async></Script>
    <Header />
    <Component {...pageProps} />
  </>
}