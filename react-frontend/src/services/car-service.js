import axios from 'axios';

const CAR_API_URL =  "http://localhost:8080/api/v1/cars";

class CarService {
    getCars = () => {
        return axios.get(CAR_API_URL);
    }
    getCarByColour = (carColor) => {
        return axios.get(CAR_API_URL + "/color/" + carColor)
    }

    getCarByMake = (carMake) => {
        return axios.get(CAR_API_URL + "/make/" + carMake)
    }

    getCarByModel = (carModel) => {
        return axios.get(CAR_API_URL + "/model/" + carModel)
    }

    getCarByYear = (carYear) => {
        return axios.get(CAR_API_URL + "/year/" + carYear)
    }
}

export default new CarService();