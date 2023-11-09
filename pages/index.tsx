import Link from 'next/link'
import Head from 'next/head'
import Dots from './components/dots'

function Home() {
	Dots()

	return (
		<>
			<Head>
				<title>Jakub Białoskórski - portfolio</title>
				<meta name='description' content='Senior DevOps & AWS Cloud Engineer' />
				<meta name='keywords' content='devops, inżynier cloud, aws' />
				<meta name='author' content='Jakub Białoskórski' />
			</Head>
			<div className='menu'>
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
