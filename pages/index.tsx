import Link from 'next/link'
import Head from 'next/head'
import useDots from './components/dots'

function Home() {
	useDots()

	return (
		<>
			<Head>
				<title>Jakub Białoskórski - portfolio</title>
				<meta name='description' content='DevOps & Platform Engineer | MLOps & AI infrastructure' />
				<meta name='keywords' content='devops, cloud native, platform engineering, mlops, ai infrastructure, kubernetes, aws, azure, terraform, opentofu, kafka, inżynier cloud' />
				<meta name='author' content='Jakub Białoskórski' />
			</Head>
			<div className='menu notranslate'>
				<div className='menu-items'>
					<Link href='/about'>
						<div className='menu-item'>about me</div>
					</Link>
					<Link href='https://github.com/JakubBialoskorski'>
						<div className='menu-item'>projects</div>
					</Link>
					<Link href='/certificates'>
						<div className='menu-item'>certificates</div>
					</Link>
				</div>
				<div className='menu-background-pattern'></div>
				<div className='menu-background-image'></div>
			</div>
		</>
	)
}

export default Home
