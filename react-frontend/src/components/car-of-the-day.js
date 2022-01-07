import {CarDetails} from "./car-details";

export const CarOfTheDay = (props) => {
    const date = new Date().toLocaleDateString();

    const style = {
        background: '#233142',
        width: '80%',
        marginLeft: '10%',
        height: '450px',
        border: '2px #385170 solid',
        color: '#f7f7f7'
    }
    return(
        <div style={style}>
            <h2>Car of the day</h2>
            <div>Today is { date }</div>
            <CarDetails src={props.src}/>
        </div>
    )
}