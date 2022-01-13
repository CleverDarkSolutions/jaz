import logo from './logo.svg';
import './App.css';
import {MainNavbar} from "./components/navbar";
import {CarDetails} from "./components/car-details";
import {CarOfTheDay} from "./components/car-of-the-day";
import {SearchBar} from "./components/search-bar";
import {QueryView} from "./components/query-view";

function App() {
  return (
    <div className="App">
      <MainNavbar/>
        <SearchBar/>
        <CarOfTheDay src="https://d-mf.ppstatic.pl/art/1w/8j/6v7tlg9wsgsoooowcgcww/bugatti-1.640.jpg"/>
        <QueryView input='red' type='colour'/>
    </div>
  );
}

export default App;
