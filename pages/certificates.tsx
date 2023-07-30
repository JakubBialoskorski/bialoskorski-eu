import Link from "next/link"
import Head from "next/head"
import {useRouter} from "next/router"

export default function Certificates() {
  const router = useRouter();
  const forceReload = () => {
    router.reload();
  }
  return (
    <>
    <Head>
      <title>Jakub Białoskórski - certificates</title>
      <link rel="icon" href={`${process.env.NEXT_PUBLIC_FAVICON}/favicon.ico`} />
      <meta name="description" content="Senior DevOps & AWS Cloud Engineer" />
      <meta name="keywords" content="devops, cloud engineer, aws" />
      <meta name="author" content="Jakub Białoskórski" />
      <script src="/transition.js" async onLoad={forceReload}/>
    </Head>
      <div id="menu">
        <div id="menu-items">
          <Link href="/"><div className="menu-item">back</div></Link>
        </div>
        <section className="overflow-hidden text-white">
        <div className="container px-5 py-2 mx-auto lg:pt-12 lg:px-32" id="gallery-items">
            <div className="flex flex-wrap -m-1 md:-m-2">
                <div className="flex flex-wrap w-1/3">
                    <div className="w-full p-1 md:p-2">
                    <Link href="https://bialoskorski.imgix.net/Microsoft.png"><img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                        src="https://bialoskorski.imgix.net/Microsoft.png" /></Link>
                    </div>
                </div>
                <div className="flex flex-wrap w-1/3">
                    <div className="w-full p-1 md:p-2">
                    <Link href="https://bialoskorski.imgix.net/OpenSUSE.png"><img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                        src="https://bialoskorski.imgix.net/OpenSUSE.png" /></Link>
                    </div>
                </div>
                <div className="flex flex-wrap w-1/3">
                    <div className="w-full p-1 md:p-2">
                    <Link href="https://bialoskorski.imgix.net/NetWare.png"><img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                        src="https://bialoskorski.imgix.net/NetWare.png" /></Link>
                    </div>
                </div>
                <div className="flex flex-wrap w-1/3">
                    <div className="w-full p-1 md:p-2">
                    <Link href="https://bialoskorski.imgix.net/AWS-Certified-Developer-Linux-Academy.png"><img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                        src="https://bialoskorski.imgix.net/AWS-Certified-Developer-Linux-Academy.png" /></Link>
                    </div>
                </div>
                <div className="flex flex-wrap w-1/3">
                    <div className="w-full p-1 md:p-2">
                    <Link href="https://bialoskorski.imgix.net/CERTYFIKAT_EN-219.png"><img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                        src="https://bialoskorski.imgix.net/CERTYFIKAT_EN-219.png" /></Link>
                    </div>
                </div>
                <div className="flex flex-wrap w-1/3">
                    <div className="w-full p-1 md:p-2">
                    <Link href="https://bialoskorski.imgix.net/Google-Marketing-Certificate.png"><img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                        src="https://bialoskorski.imgix.net/Google-Marketing-Certificate.png" /></Link>
                    </div>
                </div>
                <div className="flex flex-wrap w-1/3">
                    <div className="w-full p-1 md:p-2">
                    <Link href="https://www.credly.com/badges/96005f5b-8e07-4ef8-a178-eba364a99ee0/public_url"><img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                        src="https://bialoskorski.imgix.net/intermediate-for-istio-by-solo-io.png" /></Link>
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
