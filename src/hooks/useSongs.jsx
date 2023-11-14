import { useState, useRef, useCallback } from 'react'
import { searchSongs } from '../services/searchSongs'

export function useSongs ({ search }) {
  const [songs, setSongs] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const previousSearch = useRef(search)

  const getSongs = useCallback(async ({ search }) => {
    if (search === previousSearch.current) return
    try {
      setLoading(true)
      setError(null)
      previousSearch.current = search
      const newSongs = await searchSongs({ search })
      setSongs(newSongs)
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }, [])

  return { songs, loading, getSongs }
}
