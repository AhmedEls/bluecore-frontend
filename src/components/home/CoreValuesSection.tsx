import React from "react"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

import { classNames } from "@helpers"

export interface CoreValuesSectionProps {}

export function CoreValuesSection(props: CoreValuesSectionProps) {
  let coreValues = []

  React.useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger)
      gsap.to("#corevalues-container .timeline-upper", {
        height: "80%",
        ease: "none",
        scrollTrigger: {
          trigger: "#corevalues-container",
          start: "20% center",
          end: "+=300 center",
          scrub: 1.2,
        },
      })

      let core_values = document.querySelectorAll(
        "#corevalues-grid > div > span"
      )
      let core_values_details = document.querySelectorAll(
        "#corevalues-grid > div > :not(span)"
      )

      let dotsTL = gsap.timeline({
        scrollTrigger: {
          trigger: "#corevalues-container",
          start: "20% center",
          end: "+=300 center",
          scrub: 1.2,
        },
      })

      dotsTL
        .to(core_values, {
          opacity: 1,
          stagger: 1.25,
          ease: "none",
        })
        .to(
          "#corevalues-heading .absolute",
          {
            bottom: 0,
            duration: 3,
            ease: "none",
            scrollTrigger: {
              trigger: "#corevalues-container",
              start: "10% center",
              end: "80% center",
              scrub: 1.2,
            },
          },
          0
        )
        .to(
          "#corevalues-heading",
          {
            y: 0,
            duration: 3,
            ease: "power4.easeInOut",
          },
          0
        )
    })

    return () => ctx.revert()
  }, [])

  return (
    <div className="relative">
      <div
        className="container relative h-full mx-auto"
        id="corevalues-container"
      >
        <div className="absolute bottom-0 flex flex-col items-center justify-center w-10 text-gray-200 -translate-x-1/2 left-1/2 top-2">
          <div className="timeline-upper mb-auto mt-1 w-0.5 bg-current"></div>
        </div>
        <div
          className="grid justify-center w-full h-full grid-cols-4 grid-rows-4 gap-x-10 gap-y-6"
          id="corevalues-grid"
        >
          {coreValues.map((i, idx) => (
            <div
              key={`core_value_${idx}`}
              className={classNames(
                "relative odd:col-start-2 odd:text-right even:col-start-3",
                `row-start-${idx + 1}`
              )}
            >
              <span
                className={classNames(
                  "absolute top-3.5 h-2 w-2 rounded-full bg-current opacity-0 ring-4 ring-gray-200",
                  (idx + 1) % 2 == 0
                    ? "-left-4 -translate-x-full"
                    : "-right-4 translate-x-full"
                )}
              ></span>
              <h2 className="text-2xl font-semibold">{i.cvTitle}</h2>
              <h3 className="text-lg font-medium">{i.cvSubtitle}</h3>
              <p>{i.cvDesc.replace(/<\/?[^>]+(>|$)/g, "")}</p>
            </div>
          ))}
        </div>
        <h2
          className="absolute top-0 left-0 translate-y-20"
          id="corevalues-heading"
        >
          <span
            style={{ writingMode: "vertical-lr" }}
            className="absolute top-0 left-0 overflow-hidden font-black text-black bottom-full whitespace-nowrap text-8xl"
          >
            Our Core Values
          </span>
          <span
            style={{ writingMode: "vertical-lr" }}
            className="font-black text-gray-200 text-8xl"
          >
            Our Core Values
          </span>
        </h2>
      </div>
    </div>
  )
}
