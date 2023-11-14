import { Link } from 'react-router-dom'
import Charts from './Charts'
import equalizer from '../assets/equalizer.png'

function ListOfSongs ({ songs }) {
  return (
    <ul className='m-10 grid grid-cols-3 gap-4'>
      {
            songs
              ? songs?.map((song) => (
                <Link to={`/detail/${song.id}`} key={song.id}>
                  <li className=' w-[300px] h-[400px] mb-2 rounded-md relative block overflow-hidden glass'>
                    <img src={song.image} alt={song.title} width={300} height={400} className=' rounded-t-md' />
                    <span className='absolute m-1 text-black font-semibold inline-block pl-[100%] text-center whitespace-nowrap overflow-hidden marquee'>{song.title}</span>
                    <h4 className='absolute mt-7 ml-2 text-gray-500 font-semibold'>{song.artist}</h4>
                    <img src={equalizer} width={50} height={50} alt='' className=' ml-[40%] mt-[50px]' />
                  </li>
                </Link>
              ))
              : <div>Busca un artista</div>
          }
    </ul>
  )
}

function NoSongsResults () {
  return (
    <p className='text-gray-200'>No songs found</p>
  )
}

export function Songs ({ songs }) {
  const noSongs = songs.length === 0
  const hasSongs = songs?.length > 0
  if (noSongs) {
    return <Charts />
  } else if (hasSongs) {
    return <><ListOfSongs songs={songs} /><Charts /></>
  } else {
    return <NoSongsResults />
  }
}
