import Link from 'next/link'
import Dots from './components/dots'

function Home() {
	Dots()
	return (
		<>
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
