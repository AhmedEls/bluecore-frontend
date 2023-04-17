import React from "react"

import { gsap } from "gsap"
import { Flip } from "gsap/dist/Flip"

export interface HeroSectionProps {}

export function HeroSection(props: HeroSectionProps) {
  React.useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(Flip)
      document.body.classList.remove("loading")
      gsap
        .timeline()
        .addLabel("start", 0)
        .set([".header", ".hero-section .to--b-r"], { opacity: 0 })
        .add(() => {
          const flipstate = Flip.getState(".hero-text-logo", { simple: true })
          document
            .querySelector(".heroTextLogo")
            .replaceWith(document.querySelector(".hero-text-logo"))
          Flip.from(flipstate, {
            duration: 0.9,
            zIndex: 11,
            color: "rgb(17 24 39)",
            ease: "power4.inOut",
            // absoluteOnLeave: true,
          })
        })
        .to(
          "#loading-screen > div",
          {
            bottom: "100%",
            stagger: 0.1,
            duration: 0.6,
            ease: "power4.inOut",
          },
          "start+=0.25"
        )
        .set("#loading-screen", {
          pointerEvents: "none",
        })
        .to(
          [".header", ".hero-section .to--b-r"],
          { opacity: 1, stagger: 0.05 },
          "start+=0.7"
        )
    })

    return () => ctx.revert()
  }, [])

  return (
    <div className="font-inter hero-section pointer-events-none relative h-screen w-full overflow-hidden pt-20">
      <div className="absolute inset-0 -translate-y-10">
        <svg
          className="h-full w-full"
          viewBox="0 0 1920 1080"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_3_35)">
            <g filter="url(#filter0_f_3_35)">
              <path
                d="M506.461 679.322C629.731 679.322 729.661 578.318 729.661 453.722C729.661 329.127 629.731 228.122 506.461 228.122C383.191 228.122 283.261 329.127 283.261 453.722C283.261 578.318 383.191 679.322 506.461 679.322Z"
                fill="#F5A524"
                fillOpacity="0.4"
              />
              <path
                d="M798.052 796.96C921.322 796.96 1021.25 695.956 1021.25 571.36C1021.25 446.765 921.322 345.76 798.052 345.76C674.782 345.76 574.852 446.765 574.852 571.36C574.852 695.956 674.782 796.96 798.052 796.96Z"
                fill="#4B91E2"
                fillOpacity="0.4"
              />
            </g>
          </g>
          <defs>
            <filter
              id="filter0_f_3_35"
              x="33.2606"
              y="-21.8776"
              width="1237.99"
              height="1068.84"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="125"
                result="effect1_foregroundBlur_3_35"
              />
            </filter>
            <clipPath id="clip0_3_35">
              <rect width="1920" height="1080" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>

      <div className="container relative mx-auto flex h-full flex-col items-start">
        <h2 className="to--b-r pointer-events-auto mt-auto font-medium">
          &#8212; Your Expert Digital Partner
        </h2>
        <h2 className="heroTextLogo"></h2>
        <div className="to--b-r pointer-events-auto ml-auto mt-auto max-w-xs text-center">
          <h1 className="text-lg font-light">
            We create the ultimate
            <br />
            user experience
          </h1>
          <a href="#" className="font-semibold underline">
            Let's Talk
          </a>
        </div>
        <div className="to--b-r pointer-events-none mr-auto flex select-none text-gray-400">
          <div className="mt-3 animate-bounce">
            <svg
              width="10"
              height="48"
              viewBox="0 0 10 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.75 43.25L5 47M5 47L1.25 43.25M5 47V1"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="pointer-events-auto leading-none">
            <span className="block">Keep</span>
            <span>Scrolling</span>
          </div>
        </div>
      </div>
    </div>
  )
}
