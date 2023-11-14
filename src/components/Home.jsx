import { useSearch } from '../hooks/useSearch'
import { useSongs } from '../hooks/useSongs'
import { Songs } from './Songs'
import { Parallax } from 'react-parallax'
import image from '../assets/wallpaperbetter.jpg'

function Home () {
  const { search, setSearch, error } = useSearch()
  const { songs, loading, getSongs } = useSongs({ search })

  const handleSubmit = (event) => {
    event.preventDefault()
    getSongs({ search })
  }

  const handleChange = (event) => {
    const newSearch = event.target.value
    setSearch(newSearch)
  }

  return (
    <div>
      <Parallax strength={200} bgImage={image}>
        <div className='h-[100vh]'>
          <h1 className='absolute top-[48%] left-[25%] font-bold text-2xl text-white'>Search for the song you want by its name or by the artist.</h1>

          <form className='absolute top-[55%] left-[5%] w-[80%] mx-10 mt-5' onSubmit={handleSubmit}>
            <label for='default-search' class='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white'>Search</label>
            <div class='relative'>
              <div class='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                <svg class='w-4 h-4 text-gray-500 dark:text-gray-400' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'>
                  <path stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z' />
                </svg>
              </div>
              <input type='text' name='query' value={search} onChange={handleChange} class='block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-orange-500 focus:border-orange-500  ' placeholder='Search Songs, Artist...' required />
              <button class='text-white absolute right-2.5 bottom-2.5 bg-orange-600 hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-4 py-2'>Search</button>
            </div>
          </form>

          {error && <p className='text-red-600'>{error}</p>}
        </div>
      </Parallax>

      <main className='h-[100vh] '>
        {
          loading ? 'Loading...' : <Songs songs={songs} />
        }
      </main>

    </div>
  )
}

export default Home

/**
 * <form className='absolute top-[55%] left-[10%] w-[80%] mx-10 mt-5' onSubmit={handleSubmit}>
            <input type='text' name='query' value={search} placeholder='Song or artist name...' onChange={handleChange} className='text-black w-[90%] bg-slate-100 p-1 rounded-md' />
            <button className='ml-1 bg-slate-400 rounded-md p-1 font-semibold'>Search</button>
          </form>
 */
