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
        className="container relative mx-auto h-full"
        id="corevalues-container"
      >
        <div className="absolute bottom-0 left-1/2 top-2 flex w-10 -translate-x-1/2 flex-col items-center justify-center text-gray-200">
          <div className="timeline-upper mb-auto mt-1 w-0.5 bg-current"></div>
        </div>
        <div
          className="grid h-full w-full grid-cols-4 grid-rows-4 justify-center gap-x-10 gap-y-6"
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
          className="absolute left-0 top-0 translate-y-20"
          id="corevalues-heading"
        >
          <span
            style={{ writingMode: "vertical-lr" }}
            className="absolute bottom-full left-0 top-0 overflow-hidden whitespace-nowrap text-8xl font-black text-black"
          >
            Our Core Values
          </span>
          <span
            style={{ writingMode: "vertical-lr" }}
            className="text-8xl font-black text-gray-200"
          >
            Our Core Values
          </span>
        </h2>
      </div>
    </div>
  )
}
