import "./App.css";
import withResults from "./mocks/withResults.json";
import withoutresults from "./mocks/withoutresults.json";

function App() {
  const movies = withResults.Search;
  const hasMovies = movies?.length > 0;

  return (
    <>
      <header className="container">
        <form action="" className="form">
          <input placeholder="Avengers, The Matrix, Spiderman..." />
          <button type="submit" className="button">
            Buscar
          </button>
        </form>
      </header>
      <main>
        {hasMovies ? (
          <ul>
            {movies.map((movie) => (
              <li key={movie.imdbID}>
                <h3>{movie.Title}</h3>
                <p>{movie.Type}</p>
                <img src={movie.Poster} alt={movie.Title} />
              </li>
            ))}
          </ul>
        ) : (
          <h2>No existe el parámetro</h2>
        )}
      </main>
    </>
  );
}

export default App;
