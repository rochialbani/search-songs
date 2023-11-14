export const searchLyrics = async ({ params }) => {
  try {
    const url = `https://genius-song-lyrics1.p.rapidapi.com/song/lyrics/?id=${params}`
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '118bac1960msh9b053bd59011255p16d9dejsn90e1d50c5bc6',
        'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com'
      }
    }

    const response = await fetch(url, options)
    const json = await response.json()

    return { data: json.lyrics.lyrics.body.html }
  } catch (e) {
    throw new Error('Error searching lyrics')
  }
}
