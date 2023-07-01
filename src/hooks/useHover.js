import { useEffect, useRef, useState } from "react"

export function useHover() {
  const ref = useRef(null)
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    ref.current.onmouseenter = () => {
      setHovered(true)
    }
    ref.current.onmouseleave = () => {
      setHovered(false)
    }
  }, [])

  return { hovered, ref }
}
