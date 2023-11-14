import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

// import { searchLyrics } from '../services/searchLyrics'
// import { useLyrics } from '../hooks/useLyrics'

export default function Detail () {
  const params = useParams()
  const id = parseInt(params.id)
  // const [loading, setLoading] = useState(false)
  const [detail, setDetail] = useState(null)

  const searchLyrics = async () => {
    try {
      const url = `https://genius-song-lyrics1.p.rapidapi.com/song/details/?id=${id}`
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '118bac1960msh9b053bd59011255p16d9dejsn90e1d50c5bc6',
          'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com'
        }
      }

      const response = await fetch(url, options)
      const json = await response.json()

      setDetail(json.song)
    } catch (e) {
      throw new Error('Error searching details')
    }
  }

  useEffect(() => {
    searchLyrics(id)
  }, [])

  return (
    <main>
      <Link to='/'>
        <button className='mt-3 ml-3 text-white bg-orange-600 hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-4 py-2'>Back</button>
      </Link>
      {detail && (
        <div>
          <h1 className='flex justify-center items-center mb-5 text-3xl'>{detail.title || detail.full_title}</h1>

          <div>
            <div className='grid justify-center items-center sm:flex sm:col-span-2 sm:justify-evenly'>
              <img src={detail.song_art_image_thumbnail_url || detail.song_art_image_url} alt='' />

              <div className='mt-5 md:mt-0'>
                <div className='mb-3'>
                  <div className='flex row-span-1 gap-2'>
                    <h2 className='font-bold'>Writers: </h2>
                    <ul className='flex row-span-1 gap-5'>
                      {detail.writer_artists
                        ? detail.writer_artists.map(info => (
                          <p key={info.id}>{info.name}</p>
                        ))
                        : ('-')}
                    </ul>
                  </div>
                </div>

                <div className='mb-3'>
                  <div className='flex row-span-1 gap-2'>
                    <h2 className='font-bold'>Producers:</h2>
                    <ul className='flex row-span-1 gap-5'>
                      {detail.producer_artists
                        ? detail.producer_artists.map(info => (
                          <p key={info.id}>{info.name}</p>
                        ))
                        : ('-')}
                    </ul>
                  </div>
                </div>

                <div className='mb-3'>
                  <div className='flex row-span-1 gap-2'>
                    <h2 className='font-bold'>Genre: </h2>
                    <ul>
                      {detail.tags
                        ? detail.tags.map(info => (
                          <p key={info.id}>{info.name}</p>
                        ))
                        : ('-')}
                    </ul>
                  </div>
                </div>

                <div className='flex row-span-1 gap-2'>
                  <h2 className='font-bold'>Recording location: </h2>
                  <p>{detail.recording_location ? detail.recording_location : '-'}</p>
                </div>

              </div>

            </div>
          </div>
          <div className='p-2'>
            <h2 className='font-bold text-lg ml-5'>Description</h2>
            <p className='flex justify-center items-center ml-5 mr-5 mb-5 mt-3'>{detail.description_preview ? detail.description_preview : '-'}</p>
          </div>

          <div className='p-2'>
            <h2 className='font-bold text-lg ml-5'>Album</h2>
            <div className='ml-10 mr-10 grid justify-center items-center'>
              <img className='h-[200px] w-[200px]' src={detail.album ? detail.album.cover_art_thumbnail_url : '-'} alt='' />
              <p>{detail.album ? detail.album.full_title : '-'}</p>
              <p>{detail.album ? detail.album.release_date_for_display : '-'}</p>
            </div>
          </div>

          <div className='flex justify-evenly font-bold text-mb m-5'>
            <a
              href={detail.youtube_url}
              target='_blank'
              rel='noreferrer'
            >Watch video on YouTube
            </a>
            <a
              href={detail.apple_music_player_url}
              target='_blank'
              rel='noreferrer'
            >Listen the song on Apple Music
            </a>
            <a
              href={detail.share_url || detail.url}
              target='_blank'
              rel='noreferrer'
            >Read the Lyrics on Genius
            </a>
          </div>

        </div>
      )}
    </main>
  )
}

/**
 *  <h1>{detail.title}</h1>
      <p>{detail.recording_location}</p>
      <ul>
        {detail.tags.map(info => (
          <p key={info.id}>{info.name}</p>
        ))}
      </ul>
      <ul>
        {detail.producer_artists.map(info => (
          <p key={info.id}>{info.name}</p>
        ))}
      </ul>
      <ul>
        {detail.writer_artists.map(info => (
          <p key={info.id}>{info.name}</p>
        ))}
      </ul>
      <img src={detail.song_art_image_url} alt='' />
      <p>{detail.description_preview}</p>
      <p>{detail.album.full_title}</p>
      <img src={detail.album.cover_art_thumbnail_url} alt='' />
      <p>{detail.album.release_date_for_display}</p>
      <iframe src={detail.youtube_url} />
 */
