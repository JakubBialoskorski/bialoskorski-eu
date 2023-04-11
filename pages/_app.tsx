import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Link from 'next/link'
import CookieConsent from "react-cookie-consent"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <CookieConsent
      //enableDeclineButton
      flipButtons
      location="bottom"
      buttonText="I understand"
      cookieName="bialoskorski-eu-cookies"
      style={{ background: 'black' }}
      buttonStyle={{
        color: '#000',
        fontSize: '15px',
      }}
      // declineButtonStyle={{
      //   margin: '10px 10px 10px 0',
      // }}
      expires={450}
      >
      This website uses <Link href="https://www.cloudflare.com/learning/privacy/what-are-cookies/"><u>cookies</u></Link> to enhance the user experience.
    </CookieConsent>
    </>
  ) 
}