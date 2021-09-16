
import './App.css';
import Header from './components/Header';
import MoviesContainer from './components/MoviesContainer';
import MovieCard from './components/MovieCard';
import { BrowserRouter as Router, Route } from "react-router-dom"
function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Route exact={true} path="/" component={MoviesContainer} />
        <Route exact={true} path="/movieCard/:id" component={MovieCard} />
      </Router>
    </div>
  );
}

export default App;
