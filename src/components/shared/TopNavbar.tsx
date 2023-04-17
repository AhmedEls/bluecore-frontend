import React from "react"

export interface TopNavbarProps {}

export function TopNavbar(props: TopNavbarProps) {
  const [date, setDate] = React.useState(new Date())

  function tick() {
    setDate(new Date())
  }

  React.useEffect(() => {
    const timerID = setInterval(() => tick(), 1000)

    return function cleanup() {
      clearInterval(timerID)
    }
  }, [])

  const getCurrentTimeIcon = () => {
    if (
      date
        .toLocaleTimeString([], {
          dayPeriod: "short",
        })
        .includes("night")
    ) {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-4 w-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="currentColor"
            d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
          />
        </svg>
      )
    }
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-5 w-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
        />
      </svg>
    )
  }

  return (
    <header className="header relative -mb-20">
      <div className="container relative mx-auto flex h-20 items-center justify-between">
        <nav className="absolute right-8 top-full font-mono">
          <ul className="flex flex-col items-end gap-y-2 text-sm font-medium">
            <li className="group relative text-gray-500 transition-colors hover:text-black">
              <a className="block" href="#">
                Home
              </a>
              <span className="absolute left-1/2 right-1/2 h-px bg-black transition-all group-hover:left-0 group-hover:right-0"></span>
            </li>
            <li className="group relative text-gray-500 transition-colors hover:text-black">
              <a
                className="block before:absolute before:bottom-0 before:left-1/2 before:right-1/2 before:h-px before:bg-black before:transition-all group-hover:before:left-0 group-hover:before:right-0"
                href="#"
              >
                Who We Are
              </a>
            </li>
            <li className="group relative text-gray-500 transition-colors hover:text-black">
              <a className="block" href="#">
                Services
              </a>
              <span className="absolute left-1/2 right-1/2 h-px bg-black transition-all group-hover:left-0 group-hover:right-0"></span>
            </li>
            <li className="group relative text-gray-500 transition-colors hover:text-black">
              <a className="block" href="#">
                Portfolio
              </a>
              <span className="absolute left-1/2 right-1/2 h-px bg-black transition-all group-hover:left-0 group-hover:right-0"></span>
            </li>
            <li className="group relative text-gray-500 transition-colors hover:text-black">
              <a className="block" href="#">
                Contact Us
              </a>
              <span className="absolute left-1/2 right-1/2 h-px bg-black transition-all group-hover:left-0 group-hover:right-0"></span>
            </li>
          </ul>
        </nav>
        <div>
          <svg
            id="logo-72"
            className="h-8 w-8"
            viewBox="0 0 53 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.2997 0L52.0461 28.6301V44H38.6311V34.1553L17.7522 13.3607L13.415 13.3607L13.415 44H0L0 0L23.2997 0ZM38.6311 15.2694V0L52.0461 0V15.2694L38.6311 15.2694Z"
              className="ccustom"
              fill="currentColor"
            ></path>
          </svg>
        </div>
        <div className="flex items-center gap-3">
          <span className="font-inter text-sm font-semibold" id="testgsap">
            <span
              id="clock__indicator"
              className="mr-1 inline-block h-2 w-2 -translate-y-px rounded-full bg-current"
            ></span>
            <span id="current__time">
              {date.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </span>{" "}
            &#8212; DXB, UAE
          </span>
          {getCurrentTimeIcon()}
        </div>
      </div>
    </header>
  )
}
