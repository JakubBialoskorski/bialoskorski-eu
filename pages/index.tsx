import Link from "next/link"
import Head from "next/head"

export default function Home() {
  return (
    <>
    <Head>
      <title>Jakub Białoskórski - portfolio</title>
      <link rel="icon" href={`${process.env.NEXT_PUBLIC_FAVICON}/favicon.ico`} />
      <meta name="description" content="Senior DevOps & AWS Cloud Engineer" />
      <meta name="keywords" content="devops, cloud engineer, aws" />
      <meta name="author" content="Jakub Białoskórski" />
      <script src="/transition.js" async />
    </Head>
      <div id="menu">
        <div id="menu-items">
          <Link href="/about"><div className="menu-item">about me</div></Link>
          <Link href="https://github.com/JakubBialoskorski"><div className="menu-item">projects</div></Link>
          <Link href="/certificates"><div className="menu-item">certificates</div></Link>
        </div>
        <div id="menu-background-pattern"></div>
        <div id="menu-background-image"></div>
      </div>
    </>
  )
}
