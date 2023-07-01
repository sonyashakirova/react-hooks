import { useEffect, useState } from "react"

export function useFetch(url) {
  const [data, setData] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  async function fetchData(url, params) {
    setLoading(true)

    const response = await fetch(
      params ? `${url}?${new URLSearchParams(params)}` : url
    )

    if (response.ok) {
      const json = await response.json()
      setData(json)
    } else {
      setError(true)
    }

    setLoading(false)
  }

  useEffect(() => {
    fetchData(url)
  }, [])

  async function refetch({ params }) {
    await fetchData(url, params)
  }

  return {
    data,
    isLoading,
    error,
    refetch
  }
}
