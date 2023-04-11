
import './App.css'
import { HomePage, NotFoundPage, SearchPage, ShowPage, ShowsPage } from './pages'
import { Header } from './layouts'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Header />} >
        <Route index element={<HomePage />} />
        <Route path='shows' element={<ShowsPage />} />
        <Route path='shows/:id' element={<ShowPage />} />
        <Route path='search' element={<SearchPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App
