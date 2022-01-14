import {Button, Form, FormControl} from "react-bootstrap";
import {SearchButtons} from "./search-buttons";
import {togglePage} from "../store/counterSlice";
import {useDispatch} from "react-redux";

export const SearchBar = () => {

    const search = () => {
    }
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
                    style={bar}
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                />
                <SearchButtons/>
            </Form>
            <Button style={buttonStyle} variant="outline-success">Search</Button>
        </div>
    )
}