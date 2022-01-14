import {useEffect, useState} from "react";
import carService from "../services/car-service";

export const CarDetails = (props) => {
    const mockCar = {
        make: 'testmake',
        model: 'testmodel',
        colour: 'testcolour',
        cost: 'testcost',
        year: 'testyear'
    }
    const [car,setCar] = useState(mockCar)
    const [blockApi, setBlockApi] = useState(false)

    useEffect(() => {
        if(blockApi === false) {
            let min = Math.ceil(1);
            let max = Math.floor(1000);
            const randomId = Math.floor(Math.random() * (max - min + 1) + min);
            carService.getCarById(randomId).then(res => setCar(res.data))
            setBlockApi(true)
        }
    })

    const text = {
        float: 'left',
        marginLeft: '40px',
        marginTop: '20px'
    }
    const image = {
        float: 'left',
        width: '300px',
        height: '300px',
        borderRadius: '20px',
        border: '4px solid #385170',
        margin: '20px'
    }
    const title = {
        fontSize: '36px'
    };
    const details = {
        float: 'left',
        fontSize: '22px',
        marginTop: '20px'
    };

    return(
        <div>
            <img style={image} src={props.src} alt="uwu"/>
            <div style={text}>
                <div style={title}>
                    {car.make + " " + car.model}
                </div>
                <div style={details}>
                    <div>Make: {car.make}</div>
                    <div>Model: {car.model}</div>
                    <div>Colour: {car.colour}</div>
                    <div>Cost: {car.cost}</div>
                    <div>Year: {car.year}</div>
                </div>
            </div>
        </div>
    )
}