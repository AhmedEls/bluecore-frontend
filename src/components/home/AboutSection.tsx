import React from "react"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

export interface AboutSectionProps {}

export function AboutSection(props: AboutSectionProps) {
  React.useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    let ctx = gsap.context(() => {
      const titlesWrapper = document.querySelector(
        "#about-section-bio-wrapper p"
      )
      const titles = gsap.utils.toArray("p[data-bio] > span")
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#about-section-bio-wrapper",
          start: "-=200 center",
          end: "+100 center",
          scrub: 1,
        },
      })
      tl.fromTo(
        titles,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          stagger: 0.15,
        },
        0
      ).fromTo(
        titlesWrapper,
        {
          rotate: 8,
        },
        {
          rotate: 0,
          duration: 0.15 * (titles.length / 2),
        },
        0
      )
    })

    return () => ctx.revert()
  }, [])
  return (
    <div className="relative pb-40 pt-20" id="about-section">
      <div
        className="font-inter pointer-events-none absolute right-0 top-0 inline-block -translate-y-1/3 select-none text-right"
        style={{
          lineHeight: 0.85,
          zIndex: -1,
        }}
        id="section-heading"
      >
        <h2
          className="stroke-text font-black text-gray-100"
          style={{ fontSize: "20vw" }}
        >
          Who
        </h2>
        <h2
          className="stroke-text -translate-x-1/3 text-right font-black text-gray-100"
          style={{ fontSize: "15vw" }}
        >
          We Are
        </h2>
      </div>
      <div
        className="container relative mx-auto"
        id="about-section-bio-wrapper"
      >
        <h2
          className="content__title content__title--left w-1/2 text-lg"
          style={{
            lineHeight: 1.2,
            counterIncrement: "section",
            display: "grid",
            gap: "2rem",
            textAlign: "left",
          }}
        >
          <p
            className="origin-left -translate-y-1/4 pt-20 font-poppins text-2xl font-semibold leading-relaxed text-zinc-400"
            data-bio
          >
            <span>We are a </span>
            <span className="text-black">growing</span>
            <span> creative team met</span>
            <span className="text-black"> many years</span>
            <span> ago and decided to </span>
            <span>provide all our </span>
            <span className="text-black">experiences</span>{" "}
            <span>gathered together through </span>
            <span className="text-black">BlueCore.</span>
          </p>
        </h2>
      </div>
    </div>
  )
}
