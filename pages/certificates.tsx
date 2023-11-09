import Link from 'next/link'
import Head from 'next/head'
import Dots from './components/dots'

function Certificates() {
	Dots()

	return (
		<>
			<Head>
				<title>Jakub Białoskórski - certificates</title>
				<meta name='description' content='Senior DevOps & AWS Cloud Engineer' />
				<meta name='keywords' content='devops, inżynier cloud, aws' />
				<meta name='author' content='Jakub Białoskórski' />
			</Head>
			<div className='menu'>
				<div className='menu-items'>
					<Link href='/'>
						<div className='menu-item'>back</div>
					</Link>
				</div>
				<div className='pictures'>
					<div className='picture'>
						<Link
							href='https://bialoskorski.imgix.net/Microsoft.png'
							target='_blank'>
							<img alt='gallery' src='/certificates/Microsoft.png' />
						</Link>
					</div>
					<div className='picture'>
						<Link
							href='https://bialoskorski.imgix.net/OpenSUSE.png'
							target='_blank'>
							<img alt='gallery' src='/certificates/OpenSUSE.png' />
						</Link>
					</div>
					<div className='picture'>
						<Link
							href='https://bialoskorski.imgix.net/NetWare.png'
							target='_blank'>
							<img alt='gallery' src='/certificates/NetWare.png' />
						</Link>
					</div>
					<div className='picture'>
						<Link
							href='https://bialoskorski.imgix.net/AWS-Certified-Developer-Linux-Academy.png'
							target='_blank'>
							<img alt='gallery' src='/certificates/AWS-Dev.png' />
						</Link>
					</div>

					<div className='picture'>
						<Link
							href='https://bialoskorski.imgix.net/CERTYFIKAT_EN-219.png'
							target='_blank'>
							<img alt='gallery' src='/certificates/SecurityAcademy.png' />
						</Link>
					</div>
					<div className='picture'>
						<Link
							href='https://bialoskorski.imgix.net/Google-Marketing-Certificate.png'
							target='_blank'>
							<img alt='gallery' src='/certificates/GoogleMarketing.png' />
						</Link>
					</div>
					<div className='picture'>
						<Link
							href='https://www.credly.com/badges/96005f5b-8e07-4ef8-a178-eba364a99ee0/public_url'
							target='_blank'>
							<img alt='gallery' src='/certificates/Istio.png' />
						</Link>
					</div>
				</div>
				<div className='menu-background-pattern'></div>
				<div className='menu-background-image'></div>
			</div>
		</>
	)
}

export default Certificates
