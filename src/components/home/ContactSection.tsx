import React from "react"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

export interface ContactSectionProps {}

export function ContactSection(props: ContactSectionProps) {
  React.useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    let ctx = gsap.context(() => {
      let marqueeTL = gsap.timeline()
      let marquees = document.querySelectorAll(".marquee > .marquee-content")
      marquees.forEach((item) => {
        marqueeTL.to(item, {
          xPercent: -40,
          start: "0%",
          end: "100%",
          ease: "none",
          scrollTrigger: {
            trigger: item,
            scrub: 2,
          },
        })
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <>
      <hr className="mx-auto mb-20 hidden max-w-xs" />
      <div className="marquee mb-20">
        <div className="marquee-content select-none">
          <h2>We Love To Hear From You</h2>
          <h2>We Love To Hear From You</h2>
          <h2>We Love To Hear From You</h2>
          <h2>We Love To Hear From You</h2>
          <h2>We Love To Hear From You</h2>
          <h2>We Love To Hear From You</h2>
        </div>
      </div>
      <div className="relative" id="contact-wrapper">
        <div
          className="font-inter pointer-events-none relative h-full bg-gray-100 shadow-xl shadow-gray-900/5"
          style={{ zIndex: 1 }}
          id="contact-content"
        >
          <div className="container mx-auto flex h-full flex-col items-center justify-start pb-20">
            <h2
              className="pointer-events-auto relative origin-bottom-left text-6xl font-extrabold"
              id="say-hello-title"
            >
              <span>Say Hello.</span>
              <svg
                className="absolute right-4 top-full w-1/2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 69.24294 15.80886"
              >
                <path
                  d="M.72389,3.45029c17.61435-.50658,35.2287-1.01317,52.84305-1.51975,4.98519-.14337,9.97039-.28675,14.95558-.43012V.00042c-8.83186,1.05581-17.60382,2.57091-26.27205,4.56741-2.14332,.49366-4.28,1.01594-6.40953,1.56607-1.05269,.27195-2.3153,.4399-3.31391,.88073-.47489,.20964-.80211,.47908-.87434,1.02-.22804,1.70781,2.20153,1.4773,3.2296,1.62674,2.13816,.31081,4.23336,.83088,6.28557,1.50243v-1.44642c-.84494,.27522-1.68989,.55043-2.53483,.82565-.7163,.23331-1.57267,.40129-2.17822,.87126-.8292,.64353-1.1137,1.77347-.7637,2.75392,.48969,1.37179,1.74578,1.58515,3.03827,1.63982,.96521,.04083,.96329-1.45925,0-1.5-.75909-.03211-2.2427-.31661-1.57179-1.47157,.2364-.40695,.83243-.50768,1.24556-.64225,1.05449-.34347,2.10898-.68694,3.16347-1.03041,.71208-.23194,.71158-1.21357,0-1.44642-1.76105-.57628-3.55254-1.04253-5.37931-1.35788-.74353-.12835-1.49145-.23301-2.24113-.31823-.22714-.02681-.45459-.05069-.68236-.07164-.00609,.352,.11775,.45162,.37153,.29887,.31074,.05651,.85683-.23004,1.18326-.31646,3.6997-.97938,7.42191-1.87372,11.16291-2.68113,7.45025-1.60796,14.97319-2.8658,22.541-3.77049,.93069-.11126,.98999-1.52847,0-1.5C50.90816,.50701,33.29381,1.01359,15.67947,1.52018c-4.98519,.14337-9.97039,.28675-14.95558,.43012-.96319,.0277-.96718,1.52782,0,1.5H.72389Z"
                  fill="currentColor"
                ></path>
              </svg>
            </h2>
            <p className="mt-14 text-center">
              Do you want to build a brand,
              <br />
              website, app or campaign?
            </p>
            {/* Contact Form */}
            <form className="flexx pointer-events-auto mt-14 h-full w-1/2 flex-col justify-center space-y-10">
              <div className="group relative border-b-2">
                <span
                  className="absolute left-1/2 top-full h-0.5 w-0 bg-gray-900 transition-all group-focus-within:left-0 group-focus-within:w-full"
                  style={{
                    transitionTimingFunction:
                      "cubic-bezier(0.075, 0.82, 0.165, 1)",
                    transitionDuration: "0.4s",
                  }}
                ></span>
                <input
                  type="text"
                  className="relative h-10 w-full border-none bg-transparent px-1 font-mono ring-0 focus:ring-0"
                  placeholder="Name"
                />
              </div>
              <div className="group relative border-b-2">
                <span
                  className="absolute left-1/2 top-full h-0.5 w-0 bg-gray-900 transition-all group-focus-within:left-0 group-focus-within:w-full"
                  style={{
                    transitionTimingFunction:
                      "cubic-bezier(0.075, 0.82, 0.165, 1)",
                    transitionDuration: "0.4s",
                  }}
                ></span>
                <input
                  type="text"
                  className="relative h-10 w-full border-none bg-transparent px-1 font-mono ring-0 focus:ring-0"
                  placeholder="Email Address"
                />
              </div>
              <div className="group relative border-b-2">
                <span className="absolute right-0 top-full mt-0.5 text-xs text-gray-400">
                  Optional
                </span>
                <span
                  className="absolute left-1/2 top-full h-0.5 w-0 bg-gray-900 transition-all group-focus-within:left-0 group-focus-within:w-full"
                  style={{
                    transitionTimingFunction:
                      "cubic-bezier(0.075, 0.82, 0.165, 1)",
                    transitionDuration: "0.4s",
                  }}
                ></span>
                <input
                  type="text"
                  className="relative h-10 w-full border-none bg-transparent px-1 font-mono ring-0 focus:ring-0"
                  placeholder="Phone Number"
                />
              </div>
              <div className="group relative border-b-2">
                <span
                  className="absolute left-1/2 top-full h-0.5 w-0 bg-gray-900 transition-all group-focus-within:left-0 group-focus-within:w-full"
                  style={{
                    transitionTimingFunction:
                      "cubic-bezier(0.075,0.82,0.165,1)",
                    transitionDuration: "0.4s",
                  }}
                ></span>
                <textarea
                  className="relative w-full border-none bg-transparent px-1 font-mono ring-0 focus:ring-0"
                  placeholder="Message"
                  rows={4}
                ></textarea>
              </div>
              <div className="text-right">
                <button
                  type="submit"
                  className="mt-6 inline-block font-semibold underline"
                >
                  Send Message
                </button>
              </div>
            </form>
            {/* /Contact Form */}
          </div>
        </div>
        {/* Footer */}
        <div
          style={{
            height: "80vh",
            position: "sticky",
            bottom: 0,
          }}
          id="footer-wrapper"
          className="font-inter pointer-events-auto relative flex w-full overflow-hidden bg-gray-50 text-gray-900"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-orange-100 via-blue-100 to-slate-100"></div>
          <div id="footer-content">
            <h2
              style={{
                writingMode: "vertical-lr",
                fontSize: "15vh",
                whiteSpace: "nowrap",
              }}
              className="absolute py-10 font-extrabold"
              id="footer--heading"
            >
              Reach US
            </h2>
            <div className="relative flex h-full w-full flex-col py-10 pl-72">
              <h2 className="inline-block text-4xl font-extralight capitalize leading-relaxed">
                Are you interested in
                <br />
                testing our limits?
              </h2>
              <div className="my-auto grid grid-cols-4 gap-10">
                <div>
                  <h2 className="mb-6 inline-flex items-center text-sm font-semibold uppercase">
                    <svg
                      className="mr-2 h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M4 17L10 11L4 5M12 19H20"
                        stroke="#000000"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>Visit us</span>
                  </h2>
                  <p className="mb-2 text-xl">30th, Business Tower, DXB</p>
                  <p className="text-xl">United Arab Emirates 🇦🇪</p>
                </div>
                <div>
                  <h2 className="mb-6 inline-flex items-center text-sm font-semibold uppercase">
                    <svg
                      className="mr-2 h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M4 17L10 11L4 5M12 19H20"
                        stroke="#000000"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>Get in touch</span>
                  </h2>
                  <a
                    href="tel:971502585357"
                    className="mb-2 block text-xl font-light"
                  >
                    +971 50 25 85 35 7
                  </a>
                  <a
                    href="mailto:hello@blucore.studio"
                    className="block text-lg font-light"
                  >
                    hello@blucore.studio
                  </a>
                </div>
                <div className="col-span-2"></div>
                <div className="col-span-2">
                  <h2 className="mb-6 inline-flex items-center text-sm font-semibold uppercase">
                    <svg
                      className="mr-2 h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M4 17L10 11L4 5M12 19H20"
                        stroke="#000000"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>See what we say.</span>
                  </h2>
                  <ul className="flex flex-wrap gap-x-4 gap-y-2">
                    <li>
                      <a href="#">.facebook</a>
                    </li>
                    <li>
                      <a href="#">.instagram</a>
                    </li>
                    <li>
                      <a href="#">.twitter</a>
                    </li>
                    <li>
                      <a href="#">.linkedin</a>
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mb-1 text-sm">
                <span>© 2023 BlueCore.Studio All rights reserved</span>
                <span> – </span>
                <a href="#" className="font-medium">
                  Privacy Policy
                </a>
              </h3>
              <p className="text-xs">
                BlueCore. logo, brandmark and name are a registered trademark of
                BlueCore Studio.
              </p>
            </div>
          </div>
        </div>
        {/* /Footer */}
      </div>
    </>
  )
}
