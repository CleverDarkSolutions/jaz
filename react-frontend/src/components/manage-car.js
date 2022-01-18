import {Button, Form} from "react-bootstrap";
import {useEffect, useState} from "react";
import carService from "../services/car-service";
import {useSelector, useDispatch} from "react-redux";
import {togglePage} from "../store/counterSlice";

export const ManageCar = (props) => {
    const formStyle = {
        width: '60%',
        marginLeft: '20%',
        textAlign: 'left'
    }
    const dispatch = useDispatch();
    const storeCar = useSelector( state => state.counterSlice.latestCar)
    const [blockCar, setBlockCar] = useState(false)

    const addOrUpdate = useSelector( state => state.counterSlice.pages[3].show)
    const [make, setMake] = useState('');
    const [model, setModel] = useState('');
    const [year, setYear] = useState('');
    const [colour, setColour] = useState('');
    const [cost, setCost] = useState('');

    useEffect(() => {
        if(blockCar === false)
            if(addOrUpdate === true){
                setMake(storeCar.make)
                setModel(storeCar.model)
                setYear(storeCar.year)
                setColour(storeCar.colour)
                setCost(storeCar.cost)
        }
            setBlockCar(true)
    })

    const changeCar = () => {
        const car = {
            make,
            model,
            colour,
            year,
            cost
        }
        switch (props.service) {
            case 'update':
                if(make !== '' && model !== '' && colour !== '' && year !== '' && cost !== '')
                    carService.updateCar(storeCar.id,car).then(r => console.log('Success'));
                break;
            case 'add':
                if(make !== '' && model !== '' && colour !== '' && year !== '' && cost !== '')
                    carService.createCar(car).then(r => console.log('Success'));
                break;

        }
        dispatch(togglePage(0));
    }

   return(
       <div>
           <Form style={formStyle}>
               <Form.Group className="mb-3">
                   <Form.Label>Make</Form.Label>
                   <Form.Control placeholder="Make" onChange={e => setMake(e.target.value)}/>
                   <Form.Text className="text-muted">
                       ie. BMW, Volkswagen, Toyota, Audi
                   </Form.Text>
               </Form.Group>

               <Form.Group className="mb-3">
                   <Form.Label>Model</Form.Label>
                   <Form.Control placeholder="Model" onChange={e => setModel(e.target.value)} />
               </Form.Group>

               <Form.Group className="mb-3">
                   <Form.Label>Colour</Form.Label>
                   <Form.Control placeholder="Colour" onChange={e => setColour(e.target.value)}/>
                   <Form.Text className="text-muted">
                       ie. Silver, Black, White
                   </Form.Text>
               </Form.Group>

               <Form.Group className="mb-3">
                   <Form.Label>Year</Form.Label>
                   <Form.Control placeholder="Year" onChange={e => setYear(e.target.value)}/>
                   <Form.Text className="text-muted">
                       ie. 2004
                   </Form.Text>
               </Form.Group>

               <Form.Group className="mb-3">
                   <Form.Label>Cost</Form.Label>
                   <Form.Control placeholder="Cost" onChange={e => setCost(e.target.value)} />
               </Form.Group>
               <Button
                   variant="primary"
                   onClick={() => {changeCar()}}
               >
                   Submit
               </Button>
           </Form>
       </div>
   )
}