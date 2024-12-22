import './App.css'
import movies from './data/movies'
import MovieCard from './components/movie-cards/MovieCard'

function App() {

  return (
    <div>
      <MovieCard movies={movies} />
    </div>
  )
}

export default App
