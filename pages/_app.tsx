import type { AppProps } from 'next/app'
import Link from 'next/link'
import CookieConsent from 'react-cookie-consent'
import '../styles/globals.css'
import '../styles/media.css'

export default function App({ Component, pageProps }: AppProps) {

	return (
		<>
			<Component {...pageProps} />
			<CookieConsent
				flipButtons
				location='bottom'
				buttonText='I understand'
				cookieName='bialoskorski-eu-cookies'
				expires={450}>
				This website uses{' '}
				<Link href='https://www.cloudflare.com/learning/privacy/what-are-cookies/'>
					<u>cookies</u>
				</Link>{' '}
				to enhance the user experience.
			</CookieConsent>
		</>
	)
}
