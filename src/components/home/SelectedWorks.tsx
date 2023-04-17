import React from "react"

import gsap from "gsap"
import Image from "next/image"

class Row {
  DOM = {
    el: null,
    wrapper: null,
    image: null,
    details: null,
    title: null,
    website: null,
    servicesItems: null,
  }
  constructor(DOM_el) {
    this.DOM.el = DOM_el
    this.DOM.wrapper = this.DOM.el.querySelector(".row__wrapper")
    this.DOM.image = this.DOM.el.querySelector(".row__image")
    this.DOM.details = this.DOM.el.querySelector(".row__details")
    this.DOM.title = this.DOM.el.querySelector(".row__title")
    this.DOM.website = this.DOM.el.querySelector(".row__website")
    this.DOM.servicesItems = this.DOM.el.querySelectorAll(
      ".services__list > li"
    )
  }
}

export interface SelectedWorksProps {}

export function SelectedWorks(props: SelectedWorksProps) {
  const [isOpen, setIsOpen] = React.useState(false)

  React.useEffect(() => {
    let rowsArr = []
    let rows = document.querySelectorAll("#projects-wrapper .row")
    rows.forEach((row) => {
      rowsArr.push(new Row(row))
    })

    let ctx = gsap.context(() => {
      for (const row of rowsArr) {
        row.DOM.el.addEventListener("mouseenter", () => {
          if (isOpen) return

          gsap.killTweensOf([
            row.DOM.wrapper,
            row.DOM.image,
            row.DOM.title,
            row.DOM.website.querySelector("span"),
            row.DOM.servicesItems,
          ])
          gsap
            .timeline()
            .addLabel("start", 0)
            .set(row.DOM.details, {
              pointerEvents: "auto",
            })
            .to(
              row.DOM.wrapper,
              {
                duration: 1.5,
                ease: "power3",
                scale: 0.96,
              },
              "start"
            )
            .to(
              row.DOM.image,
              {
                duration: 1.5,
                ease: "power3",
                scale: 1.1,
              },
              "start"
            )
            .to(
              row.DOM.title,
              {
                y: "0%",
                ease: "power3",
              },
              "start"
            )
            .to(
              row.DOM.website.querySelector("span"),
              {
                y: "0%",
                ease: "power3",
              },
              "start+=0.1"
            )
            .to(
              row.DOM.servicesItems,
              {
                y: "0%",
                opacity: 1,
                stagger: 0.2,
              },
              "start+=0.2"
            )
        })
        row.DOM.el.addEventListener("mouseleave", () => {
          if (isOpen) return

          gsap.killTweensOf([
            row.DOM.wrapper,
            row.DOM.image,
            row.DOM.title,
            row.DOM.website.querySelector("span"),
            row.DOM.servicesItems,
          ])

          gsap
            .timeline()
            .addLabel("start")
            .set(row.DOM.details, {
              pointerEvents: "none",
            })
            .to(
              row.DOM.wrapper,
              {
                duration: 1,
                ease: "power3",
                scale: 1,
              },
              "start"
            )
            .to(
              row.DOM.image,
              {
                duration: 1.5,
                ease: "power3",
                scale: 1,
              },
              "start"
            )
            .to(
              row.DOM.title,
              {
                y: "100%",
              },
              "start"
            )
            .to(
              row.DOM.website.querySelector("span"),
              {
                y: "100%",
                ease: "power3",
              },
              "start"
            )
            .to(
              row.DOM.servicesItems,
              {
                y: "50%",
                opacity: 0,
              },
              "start"
            )
        })
      }
    })

    return () => ctx.revert()
  }, [])

  return (
    <div
      className="font-inter relative py-20 font-poppins"
      style={{ minHeight: "75vh" }}
    >
      <div className="container mx-auto h-full">
        <div className="flex items-start gap-x-8" id="projects-wrapper">
          <div className="sticky top-8 flex w-1/2 flex-col justify-center">
            <h2 className="text-7xl font-extrabold uppercase">Selected</h2>
            <h2 className="text-7xl font-extralight uppercase">Projects</h2>
            <p className="mt-10 pr-4 text-xl font-light leading-normal">
              Explore Our Expertise and Previous Projects
            </p>
          </div>
          <div className="col-span-2 col-start-2 cursor-pointer">
            <div className="grid grid-cols-2 gap-4">
              <div className="row relative col-start-2">
                <div className="wrapper row__wrapper aspect-square w-full overflow-hidden rounded-3xl">
                  <Image
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2015&q=80"
                    alt="alt"
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="row__image h-full w-full object-cover"
                  />
                </div>
                <div className="row__details pointer-events-none absolute right-full top-0 h-full w-full">
                  <div className="flex h-full flex-col items-start justify-start">
                    <div className="flex h-full w-full flex-col p-4">
                      <div className="overflow-hidden">
                        <h2
                          className="font-inter row__title py-1 text-4xl font-extrabold"
                          style={{
                            transform: "translate(0%, 100%)",
                          }}
                        >
                          BlueCore Studio
                        </h2>
                      </div>
                      <a
                        href="#"
                        className="row__website flex items-center overflow-hidden font-medium"
                      >
                        <span className="inline-block translate-y-full py-1">
                          www.example.com
                        </span>
                      </a>
                      <ul className="font-inter services__list ml-auto mt-auto space-y-2 text-right text-sm font-medium uppercase">
                        <li className="flex translate-y-1/2 items-center justify-end gap-x-2 opacity-0">
                          <span>Web Design</span>
                          <div className="flex items-center gap-x-px">
                            <span className="h-1.5 w-1.5 rounded-full border border-black bg-black"></span>
                          </div>
                        </li>
                        <li className="flex translate-y-1/2 items-center justify-end gap-x-2 opacity-0">
                          <span>Mobile Application</span>
                          <div className="flex items-center gap-x-px">
                            <span className="h-1.5 w-1.5 rounded-full border border-black bg-black"></span>
                          </div>
                        </li>
                        <li className="flex translate-y-1/2 items-center justify-end gap-x-2 opacity-0">
                          <span>Backend API</span>
                          <div className="flex items-center gap-x-px">
                            <span className="h-1.5 w-1.5 rounded-full border border-black bg-black"></span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row relative">
                <div className="wrapper row__wrapper aspect-square w-full overflow-hidden rounded-3xl">
                  <Image
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2015&q=80"
                    alt="alt"
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="row__image h-full w-full object-cover"
                  />
                </div>
                <div className="row__details pointer-events-none absolute left-full top-0 h-full w-full">
                  <div className="flex h-full flex-col items-start justify-start">
                    <div className="flex h-full w-full flex-col p-4">
                      <div className="overflow-hidden">
                        <h2
                          className="font-inter row__title py-1 text-4xl font-extrabold"
                          style={{
                            transform: "translate(0%, 100%)",
                          }}
                        >
                          Innovnium Agency
                        </h2>
                      </div>
                      <a
                        href="#"
                        className="row__website flex items-center overflow-hidden font-medium"
                      >
                        <span className="inline-block translate-y-full py-1">
                          www.example.com
                        </span>
                      </a>
                      <ul className="font-inter services__list mr-auto mt-auto space-y-2 text-right text-sm font-medium uppercase">
                        <li className="flex translate-y-1/2 items-center gap-x-2 opacity-0">
                          <div className="flex items-center gap-x-px">
                            <span className="h-1.5 w-1.5 rounded-full border border-black bg-black"></span>
                          </div>
                          <span>Web Design</span>
                        </li>
                        <li className="flex translate-y-1/2 items-center gap-x-2 opacity-0">
                          <div className="flex items-center gap-x-px">
                            <span className="h-1.5 w-1.5 rounded-full border border-black bg-black"></span>
                          </div>
                          <span>Mobile Application</span>
                        </li>
                        <li className="flex translate-y-1/2 items-center gap-x-2 opacity-0">
                          <div className="flex items-center gap-x-px">
                            <span className="h-1.5 w-1.5 rounded-full border border-black bg-black"></span>
                          </div>
                          <span>Backend API</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
