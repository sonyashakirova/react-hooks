import { useState } from "react"
import { useWindowEvent } from "./useWindowEvent"

export function useWindowScroll() {
  const [scroll, setScroll] = useState({ x: window.scrollX, y: window.scrollY })

  useWindowEvent("scroll", () => {
    setScroll({ x: window.scrollX, y: window.scrollY })
  })

  function scrollTo({ x, y }) {
    window.scroll(x, y)
  }

  return [scroll, scrollTo]
}
