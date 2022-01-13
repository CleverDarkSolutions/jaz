import {Table} from "react-bootstrap";
import carService from "../services/car-service";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {setQuery} from "../store/counterSlice"
import axios from "axios";

export const QueryView = (props) => {

    const dispatch = useDispatch();
    let promise;
    const [items, setItems] = useState()
    if(props.type === 'model')
        promise = carService.getCarByModel(props.input)
    else if(props.type === 'colour')
        promise = carService.getCarByColour(props.input)
    else if(props.type === 'make')
        promise = carService.getCarByMake(props.input)
    else if(props.type === 'year')
        promise = carService.getCarByYear(props.input)

    useEffect(() =>{
        axios.get("http://localhost:8080/api/v1/cars")
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