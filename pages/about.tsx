import Link from 'next/link'
import Head from 'next/head'
import Dots from './components/dots'
import { AiFillLinkedin, AiOutlineMail, AiFillGithub } from 'react-icons/ai'

function About() {
	Dots()

	return (
		<>
			<Head>
				<title>Jakub Białoskórski - about me</title>
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
				<div className='about'>
					<span>
						I am a DevOps engineer with ~8 years of experience,
						<br />
						mostly focused on AWS.
					</span>
					<span>
						Feel free to contact me via:{' '}
						<div className='contactLinks'>
							<Link href='mailto:bialoskorski@icloud.com'>
								<AiOutlineMail />
							</Link>
							<Link href='https://www.linkedin.com/in/jakub-bialoskorski'>
								<AiFillLinkedin />
							</Link>
							<Link href='https://github.com/JakubBialoskorski'>
								<AiFillGithub />
							</Link>
						</div>
					</span>
				</div>
				<div className='menu-background-pattern'></div>
				<div className='menu-background-image'></div>
			</div>
		</>
	)
}

export default About
