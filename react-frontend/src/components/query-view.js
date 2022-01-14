import {Table} from "react-bootstrap";
import carService from "../services/car-service";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";

export const QueryView = (props) => {

    let cars;
    const [items, setItems] = useState()
    if(props.type === 'model')
        cars = carService.getCarByModel(props.input)
    else if(props.type === 'colour')
        cars = carService.getCarByColour(props.input)
    else if(props.type === 'make')
        cars = carService.getCarByMake(props.input)
    else if(props.type === 'year')
        cars = carService.getCarByYear(props.input)
    console.log(cars)

    useEffect(() =>{
        cars
            .then(res => res.data)
            .then(res => {
                    console.log(res)
                    setItems(res.map((car) => {
                        return (
                            <tr>
                                <td>{car.id}</td>
                                <td>{car.make}</td>
                                <td>{car.model}</td>
                                <td>{car.year}</td>
                                <td>{car.colour}</td>
                                <td>{car.cost}</td>
                            </tr>
                        );
                    }));
                }
            )
    }, [])

    return(
        <div>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Make</th>
                    <th>Model</th>
                    <th>Year</th>
                    <th>Colour</th>
                    <th>Cost</th>
                </tr>
                </thead>
                    <tbody>
                        {items}
                    </tbody>
            </Table>
        </div>
    )
}