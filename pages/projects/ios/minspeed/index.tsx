import Link from 'next/link'
import Head from 'next/head'

export default function MinSpeedSupportPage() {
	return (
		<>
			<Head>
				<title>Jakub Białoskórski - MinSpeed support page</title>
				<link
					rel='icon'
					href={`${process.env.NEXT_PUBLIC_FAVICON}/favicon.ico`}
				/>
				<script src='/transition.js' async />
			</Head>
			<div id='menu'>
				<div id='menu-items'>
					<Link href='/'>
						<div className='menu-item'>back</div>
					</Link>
				</div>
				<section className='overflow-hidden text-white'>
					<div
						className='container px-5 py-2 mx-auto lg:pt-12 lg:px-32'
						id='about-items'>
						<div className='flex flex-wrap -m-1 md:-m-2'>
							<div className='flex flex-wrap w-full'>
								<div className='w-full p-1 md:p-2'>
									<div className='flex flex-wrap w-1/3'>
										<div className='w-full p-1 md:p-12'>
											<Link href='https://apps.apple.com/us/app/minspeed/id6470914321'>
												<img
													alt='gallery'
													className='block object-cover object-center w-full h-full rounded-lg'
													src='https://bialoskorski.imgix.net/minspeed_icon.png'
												/>
											</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<div id='menu-background-pattern'></div>
				<div id='menu-background-image'></div>
			</div>
		</>
	)
}
