import logo from "./logo.svg";
import "./App.css";
import MovieList from "./MovieList";
import Nav from "./Navbar";
import { MovieProvider } from "./MovieListContext";
function App() {
  return (
    <MovieProvider>
      <div className="App">
        <Nav />
        <MovieList />
      </div>
    </MovieProvider>
  );
}

export default App;
