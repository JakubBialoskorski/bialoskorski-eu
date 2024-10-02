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
			<div className='menu notranslate'>
				<div className='menu-items'>
					<Link href='/'>
						<div className='menu-item'>back</div>
					</Link>
				</div>
				<div className='pictures'>
					<div className='picture'>
						<Link
							href='https://bialoskorski.imgix.net/Microsoft.png?fm=png&auto=format'
							target='_blank'>
							<img alt='Microsoft-Certificate' src='https://bialoskorski.imgix.net/Microsoft.png?fm=png&auto=compress&w=600' />
						</Link>
					</div>
					<div className='picture'>
						<Link
							href='https://bialoskorski.imgix.net/OpenSUSE.png?fm=png&auto=format'
							target='_blank'>
							<img alt='OpenSUSE-Certificate' src='https://bialoskorski.imgix.net/OpenSUSE.png?fm=png&auto=compress&w=600' />
						</Link>
					</div>
					<div className='picture'>
						<Link
							href='https://bialoskorski.imgix.net/NetWare.png?fm=png&auto=format'
							target='_blank'>
							<img alt='NetWare-Certificate' src='https://bialoskorski.imgix.net/NetWare.png?fm=png&auto=compress&w=600' />
						</Link>
					</div>
					<div className='picture'>
						<Link
							href='https://bialoskorski.imgix.net/AWS-Certified-Developer-Linux-Academy.png?fm=png&auto=format'
							target='_blank'>
							<img alt='AWS-Certified-Developer-Linux-Academy' src='https://bialoskorski.imgix.net/AWS-Certified-Developer-Linux-Academy.png?fm=png&auto=compress&w=600' />
						</Link>
					</div>

					<div className='picture'>
						<Link
							href='https://bialoskorski.imgix.net/CERTYFIKAT_EN-219.png?fm=png&auto=format'
							target='_blank'>
							<img alt='EN-219-IT-Security-Academy-Certificate' src='https://bialoskorski.imgix.net/CERTYFIKAT_EN-219.png?fm=png&auto=compress&w=600' />
						</Link>
					</div>
					<div className='picture'>
						<Link
							href='https://bialoskorski.imgix.net/Google-Marketing-Certificate.png?fm=png&auto=format'
							target='_blank'>
							<img alt='Google-Marketing-Certificate' src='https://bialoskorski.imgix.net/Google-Marketing-Certificate.png?fm=png&auto=compress&w=600' />
						</Link>
					</div>
					<div className='picture'>
						<Link
							href='https://www.credly.com/badges/96005f5b-8e07-4ef8-a178-eba364a99ee0/public_url'
							target='_blank'>
							<img alt='Istio-Certificate' src='https://images.credly.com/size/340x340/images/7a5401a6-01eb-4f48-bbcd-9a227fdff361/image.png' />
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
