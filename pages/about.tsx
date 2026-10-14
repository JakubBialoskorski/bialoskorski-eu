import Link from 'next/link'
import Head from 'next/head'
import useDots from './components/dots'
import { AiFillLinkedin, AiOutlineMail, AiFillGithub } from 'react-icons/ai'

function About() {
	useDots()

	return (
		<>
			<Head>
				<title>Jakub Białoskórski - about me</title>
				<meta name='description' content='DevOps & Platform Engineer | MLOps & AI infrastructure' />
				<meta name='keywords' content='devops, cloud native, platform engineering, mlops, ai infrastructure, kubernetes, aws, azure, terraform, opentofu, kafka, inżynier cloud' />
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
						DevOps & Platform Engineer with ~12 years across the stack - from racking physical servers to running multi-account Kubernetes in production.
						<br /><br />
						Building and operating platforms on AWS and Azure that let dev teams deliver faster and more securely - full monitoring on top, zero pages as the ultimate goal.
						<br /><br />
						Same approach applies to ML and AI - taking models from experiments to reliable, observable production.
						<br /><br />
						The hard, unglamorous problems - the ones nobody wants to touch - are my favorite. Got one? Feel free to ping me.
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
