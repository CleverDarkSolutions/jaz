import {SearchBar} from "./search-bar";
import {CarOfTheDay} from "./car-of-the-day";

export const Home = () => {
    return(
        <div>
            <SearchBar/>
            <CarOfTheDay src="https://d-mf.ppstatic.pl/art/1w/8j/6v7tlg9wsgsoooowcgcww/bugatti-1.640.jpg"/>
        </div>
    )
}