import Script from "next/script"
import { DefaultSeo } from "next-seo"

import { TopNavbar } from "@components/shared/TopNavbar"

export default function Layout({ children }) {
  return (
    <>
      <DefaultSeo
        defaultTitle="Fullstack Development Innovative Agency - IO.Codelab Agency"
        titleTemplate="%s - Fullstack Development Innovative Agency"
        description="We build websites, prototypes, apps, brands and campaigns."
        canonical="https://www.iocodelab.com/"
        openGraph={{
          type: "website",
          locale: "en_IE",
          url: "https://www.iocodelab.io/",
          title: "Fullstack Development Innovative Agency - IO.Codelab Agency",
          siteName: "IO.Codelab Agency",
        }}
        twitter={{
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        }}
      />
      <TopNavbar />
      <main>{children}</main>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/smoothscroll/1.4.10/SmoothScroll.min.js"
        integrity="sha512-HaoDYc3PGduguBWOSToNc0AWGHBi2Y432Ssp3wNIdlOzrunCtB2qq6FrhtPbo+PlbvRbyi86dr5VQx61eg/daQ=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
        onLoad={() => {
          // @ts-ignore
          SmoothScroll({ animationTime: 800 })
        }}
      ></Script>
    </>
  )
}
