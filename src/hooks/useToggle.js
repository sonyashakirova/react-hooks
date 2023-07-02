import { useState } from "react"

export function useToggle(initialValue) {
  const [state, setState] = useState(() => {
    if (Array.isArray(initialValue)) return initialValue[0]

    return initialValue ?? true
  })

  function toggle(value) {
    if (Array.isArray(initialValue)) {
      if (value && initialValue.includes(value)) {
        setState(value)
      } else if (!value) {
        setState((prevState) => {
          const index = initialValue.indexOf(prevState)

          return index === initialValue.length - 1
            ? initialValue[0] : initialValue[index + 1]
        })
      }
    } else {
      setState((prevState) => {
        return typeof value === "boolean"
          ? value : !prevState
      })
    }
  }

  return [state, toggle]
}
