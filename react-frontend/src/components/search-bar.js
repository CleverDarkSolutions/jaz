import {Button, Form, FormControl} from "react-bootstrap";
import {SearchButtons} from "./search-buttons";
import {setQueryInput, setQueryType, togglePage} from "../store/counterSlice";
import {useDispatch} from "react-redux";
import {useState} from "react";

export const SearchBar = () => {

    const dispatch = useDispatch();
    const [input, setInput] = useState('');

    const bar = {
        width: '40%',
        marginLeft: '10%'
    }
    const box = {
        marginBottom: '5%',
        marginTop: '2%'
    }
    const buttonStyle = {
        float: 'left',
        marginLeft: '10%',
        marginTop: '1%'
    }
    return(
        <div style={box}>
            <Form className="d-flex">
                <FormControl
                    onChange={ e => setInput(e.target.value)}
                    style={bar}
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                />
                <SearchButtons/>
            </Form>
            <Button
                style={buttonStyle}
                variant="outline-success"
                onClick={() =>{
                    if(input !== '') {
                        dispatch(setQueryInput(input))
                        dispatch(togglePage(1))
                    }
                }}
            >Search</Button>
        </div>
    )
}