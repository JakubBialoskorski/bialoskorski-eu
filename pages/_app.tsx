import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Link from 'next/link'
import CookieConsent from "react-cookie-consent"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <CookieConsent>This website uses <Link href="https://www.cloudflare.com/learning/privacy/what-are-cookies/">cookies</Link> to enhance the user experience.</CookieConsent>
    </>
  ) 
}
