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
			<div className='menu notranslate'>
				<div className='menu-items'>
					<Link href='/'>
						<div className='menu-item'>back</div>
					</Link>
				</div>
				<div className='about'>
					<span>
						I'm what I consider to be a DevOps/SRE/SysAdmin/Ops hybrid.
						<br /><br />
						I enable dev teams to deliver faster and more secure, ultimately having full monitoring and zero pages.
						<br /><br />
						I also specialize in technically / architecturally challenging tasks, so if you have one - feel free to ping me.
						<br /><br />
					</span>
					<span>
						Contact:{' '}
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
