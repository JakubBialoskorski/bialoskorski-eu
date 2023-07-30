import Link from "next/link"
import Head from "next/head"
import {
  AiFillLinkedin,
  AiOutlineMail,
  AiFillGithub
} from "react-icons/ai";
import {useRouter} from "next/router"

export default function About() {
  const router = useRouter();
  const forceReload = () => {
    router.reload();
  }
  return (
    <>
    <Head>
      <title>Jakub Białoskórski - about me</title>
      <link rel="icon" href={`${process.env.NEXT_PUBLIC_FAVICON}/favicon.ico`} />
      <meta name="description" content="Senior DevOps & AWS Cloud Engineer">
      <meta name="keywords" content="devops, cloud engineer, aws">
      <meta name="author" content="Jakub Białoskórski">
      <script src="/transition.js" async onLoad={forceReload}/>
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
                      <span>Feel free to contact me via: <div className="flex justify-left"><Link href="mailto:bialoskorski@icloud.com"><AiOutlineMail size="2em"/></Link><Link href="https://www.linkedin.com/in/jakub-bialoskorski"><AiFillLinkedin size="2em"/></Link><Link href="https://github.com/JakubBialoskorski"><AiFillGithub size="2em"/></Link></div></span>
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