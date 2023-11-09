import Link from "next/link"
import Head from "next/head"

export default function MinSpeedPrivacyPage() {
  return (
    <>
    <Head>
      <title>Jakub Białoskórski - MinSpeed Privacy Policy</title>
      <link rel="icon" href={`${process.env.NEXT_PUBLIC_FAVICON}/favicon.ico`} />
      <script src="/transition.js" async />
    </Head>
      <div id="menu">
        <div id="menu-items">
          <Link href="https://apps.apple.com/us/app/minspeed/id6470914321"><div className="menu-item">back to AppStore</div></Link> 
        </div>
        <section className="overflow-hidden text-white">
        <div className="container px-5 py-2 mx-auto lg:pt-12 lg:px-32" id="about-items">
            <div className="flex flex-wrap -m-1 md:-m-2">
                <div className="flex flex-wrap w-full">
                    <div className="w-full p-1 md:p-1 text-sm">
                            
                            <p>**Privacy Policy**</p>
                            Jakub Bialoskorski built the MinSpeed app as a Free app. This SERVICE is provided by Jakub Bialoskorski at no cost and is intended for use as is.
                            This page is used to inform visitors regarding my policies with the collection, use, and disclosure of Personal Information if anyone decided to use my Service.
                            If you choose to use my Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that I collect is used for providing and improving the Service. I will not use or share your information with anyone except as described in this Privacy Policy.

                            <p>**Information Collection and Use**</p>
                            For a better experience, while using our Service, I may require you to provide us with certain personally identifiable information. The information that I request will be retained on your device and is not collected by me in any way.
                            I am using build-in GPS tracking from your device sensors to provide accurate speed readings. No location is being stored at any given moment.

                            <p>**Log Data**</p>
                            I do not log ANY data, period.

                            <p>**Cookies**</p>
                            Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers. These are sent to your browser from the websites that you visit and are stored on your device`s internal memory.
                            This Service does not use these “cookies” explicitly. However, the app may use third-party code and libraries that use “cookies” to collect information and improve their services. You have the option to either accept or refuse these cookies and know when a cookie is being sent to your device. If you choose to refuse our cookies, you may not be able to use some portions of this Service.

                            <p>**Service Providers**</p>
                            I do not use any external Service Providers.

                            <p>**Security**</p>
                            Remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and I cannot guarantee it`s absolute security.

                            <p>**Links to Other Sites**</p>
                            This Service do not contain any links, even my own.

                            <p>**Children`s Privacy**</p>
                            These Services do not address anyone under the age of 13. I do not knowingly collect personally identifiable information from children under 13 years of age. In the case I discover that a child under 13 has provided me with personal information, I immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact me so that I will be able to do the necessary actions.

                            <p>**Changes to This Privacy Policy**</p>
                            I may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. I will notify you of any changes by posting the new Privacy Policy on this page.
                            This policy is effective as of 2023-10-31 .

                            <p>**Contact me**</p>
                            If you have any questions or suggestions about my Privacy Policy, do not hesitate to contact me at <Link href="mailto:support@bialoskorski.eu">support@bialoskorski.eu</Link>
                      
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
