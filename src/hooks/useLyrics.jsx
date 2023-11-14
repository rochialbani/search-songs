import { useCallback, useState } from 'react'
import { searchLyrics } from '../services/searchLyrics'

export function useLyrics () {
  const [lyrics, setLyrics] = useState({})
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const getLyrics = useCallback(async ({ params }) => {
    try {
      setLoading(true)
      setError(null)
      const newLyrics = await searchLyrics({ params })
      console.log('newLyrics', newLyrics)
      setLyrics(newLyrics)
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }, [])

  return { lyrics, loading, getLyrics }
}
