import logo from './logo.svg';
import './App.css';
import {MainNavbar} from "./components/navbar";
import {CarDetails} from "./components/car-details";
import {CarOfTheDay} from "./components/car-of-the-day";
import {SearchBar} from "./components/search-bar";
import {QueryView} from "./components/query-view";
import {Home} from "./components/home";
import {useDispatch, useSelector} from "react-redux";
import {ManageCar} from "./components/manage-car";

function App() {
  const dispatch = useDispatch();
  const storeData = useSelector(state => state.counterSlice);
  const homeSwitch = storeData.pages[0].show;
  const querySwitch = storeData.pages[1].show;
  const addSwitch = storeData.pages[2].show;
  const queryType = storeData.queryType;
  const queryInput = storeData.queryInput;
  const updateSwitch = storeData.pages[3].show;
  return (
    <div className="App">
      <MainNavbar/>
      { homeSwitch && <Home/> }
      { querySwitch && <QueryView input={queryInput} type={queryType}/> }
      { addSwitch && <ManageCar service='add'/> }
      { updateSwitch && <ManageCar service='update'/>}
    </div>
  );
}

export default App;
