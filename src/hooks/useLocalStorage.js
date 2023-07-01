import { useEffect, useRef, useState } from "react"

export function useLocalStorage(initialValue) {
  const key = "storage-key"
  const [value, setValue] = useState(initialValue)

  useEffect(() => {
    const savedValue = JSON.parse(localStorage.getItem(key))
      
    if (savedValue) {
      setValue(savedValue)
    } else {
      localStorage.setItem(key, JSON.stringify(initialValue))
    }
  }, [])

  function setItem(newValue) {
    localStorage.setItem(key, JSON.stringify(newValue))
    setValue(newValue)
  }

  function removeItem() {
    localStorage.removeItem(key)
    setValue(null)
  }

  return [value, { setItem, removeItem }]
}
