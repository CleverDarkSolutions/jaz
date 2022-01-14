import logo from './logo.svg';
import './App.css';
import {MainNavbar} from "./components/navbar";
import {CarDetails} from "./components/car-details";
import {CarOfTheDay} from "./components/car-of-the-day";
import {SearchBar} from "./components/search-bar";
import {QueryView} from "./components/query-view";
import {Home} from "./components/home";
import {useDispatch, useSelector} from "react-redux";

function App() {
  const dispatch = useDispatch();
  const storeData = useSelector(state => state.counterSlice);
  const homeSwitch = storeData.pages[0].show;
  const querySwitch = storeData.pages[1].show;
  return (
    <div className="App">
      <MainNavbar/>
      { homeSwitch && <Home/> }
      { querySwitch && <QueryView input='red' type='colour'/> }
    </div>
  );
}

export default App;
