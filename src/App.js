import logo from "./logo.svg";
import "./App.css";
import MovieList from "./MovieList";
import Nav from "./Navbar";
import { MovieProvider } from "./MovieListContext";
import AddMovie from "./AddMovie";
function App() {
  return (
    <MovieProvider>
      <div className="App">
        <Nav />
        <MovieList />
        <AddMovie />
      </div>
    </MovieProvider>
  );
}

export default App;
