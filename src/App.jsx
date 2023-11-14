import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Detail from './components/Detail'

function App () {
  return (
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/detail/:id' element={<Detail />} />
    </Routes>
  )
}

export default App
