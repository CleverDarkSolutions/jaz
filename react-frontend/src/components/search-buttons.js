import {useState} from "react";
import {ButtonGroup, ToggleButton} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {setQueryType} from "../store/counterSlice";

export const SearchButtons = () => {
    const buttonStyle = {
        margin: '8px'
    }
    const dispatch = useDispatch();
    const [radioValue, setRadioValue] = useState('1');

    const radios = [
        { name: 'Make', value: '1' },
        { name: 'Model', value: '2' },
        { name: 'Year', value: '3' },
        { name: 'Colour', value: '4' },
    ];

    return (
            <ButtonGroup>
                {radios.map((radio, idx) => (
                    <ToggleButton
                        style={buttonStyle}
                        key={idx}
                        id={`radio-${idx}`}
                        type="radio"
                        variant={idx % 2 ? 'outline-success' : 'outline-danger'}
                        name="radio"
                        value={radio.value}
                        checked={radioValue === radio.value}
                        onChange={(e) => setRadioValue(e.currentTarget.value)}
                        onClick={() => {
                            dispatch(setQueryType(radio.name))
                        }}
                    >
                        {radio.name}
                    </ToggleButton>
                ))}
            </ButtonGroup>
    );
}