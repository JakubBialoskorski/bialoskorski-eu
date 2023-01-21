import Link from "next/link"
import Head from "next/head"

export default function About() {
  return (
    <>
    <Head>
      <title>Jakub Białoskórski - about me</title>
      <link rel="icon" href={`${process.env.NEXT_PUBLIC_FAVICON}/favicon.ico`} />
      <script src="/transition.js" async />
    </Head>
      <div id="menu">
        <div id="menu-items">
          <Link href="/"><div className="menu-item">back</div></Link>
        </div>
        <section className="overflow-hidden text-white">
        <div className="container px-5 py-2 mx-auto lg:pt-12 lg:px-32" id="about-items">
            <div className="flex flex-wrap -m-1 md:-m-2">
                <div className="flex flex-wrap w-full">
                    <div className="w-full p-1 md:p-2">
                      <span>I am a DevOps engineer with ~8 years of experience, mostly focused on AWS.</span>
                    </div>
                </div>
                <div className="flex flex-wrap w-full">
                    <div className="w-full p-1 md:p-2">
                      <span>Feel free to contact me via <a href="mailto:bialoskorski@icloud.com">e-mail</a> or <a href="https://www.linkedin.com/in/jakub-bialoskorski">LinkedIn</a>.</span>
                    </div>
                </div>
            </div>
        </div>
        </section>
        <div id="menu-background-pattern"></div>
        <div id="menu-background-image"></div>
      </div>
    </>
  )
}