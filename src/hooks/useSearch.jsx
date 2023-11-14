import { useEffect, useRef, useState } from 'react'

export function useSearch () {
  const [search, setSearch] = useState('')
  const [error, setError] = useState('')

  const isFirstInput = useRef(true)

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === ''
      return
    }
    if (search === '') {
      setError("You can't search an empty song or artist")
      return
    }
    setError(null)
  }, [search])

  return { search, setSearch, error }
}
