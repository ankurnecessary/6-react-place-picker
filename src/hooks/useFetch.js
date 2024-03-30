import { useEffect, useState } from 'react'

export function useFetch (fetchFn, initialValue) {
  const [isFetching, setIsFetching] = useState(false)
  const [error, setError] = useState()
  const [fetchedData, setFetchedData] = useState(initialValue)
  useEffect(() => {
    async function fetchPlaces () {
      setIsFetching(true)
      try {
        const places = await fetchFn()
        setFetchedData(places)
      } catch (err) {
        setError({ message: err.message || 'Failed to fetch' })
      }
      setIsFetching(false)
    }
    fetchPlaces()
  }, [])

  return {
    isFetching,
    error,
    fetchedData
  }
}
