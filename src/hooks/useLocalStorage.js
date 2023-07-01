import { useEffect, useRef, useState } from "react"

function getValueStorage(key, initialValue) {
  const savedValue = JSON.parse(localStorage.getItem(key))
    
  if (savedValue) {
    return savedValue
  } else {
    localStorage.setItem(key, JSON.stringify(initialValue))
    return initialValue
  }
}

export function useLocalStorage(initialValue) {
  const key = "storage-key"
  const [value, setValue] = useState(() => {
    return getValueStorage(key, initialValue)
  })

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
