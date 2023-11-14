export const searchSongs = async ({ search }) => {
  if (search === '') return null

  try {
    const url = `https://genius-song-lyrics1.p.rapidapi.com/search/?q=${search}&per_page=10&page=1`
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '118bac1960msh9b053bd59011255p16d9dejsn90e1d50c5bc6',
        'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com'
      }
    }

    const response = await fetch(url, options)
    const json = await response.json()

    const songs = json.hits

    return songs?.map(song => ({
      id: song.result.id,
      title: song.result.title,
      artist: song.result.artist_names,
      image: song.result.header_image_url
    }))
  } catch (e) {
    throw new Error('Error searching songs')
  }
}
