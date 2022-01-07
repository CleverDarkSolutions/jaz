export const CarDetails = (props) => {
    const car = {
        make: 'testmake',
        model: 'testmodel',
        colour: 'testcolour',
        cost: 'testcost',
        year: 'testyear'
    }
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