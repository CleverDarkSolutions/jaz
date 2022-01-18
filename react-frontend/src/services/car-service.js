import axios from 'axios';

const CAR_API_URL =  "http://localhost:8080/api/v1/cars";

class CarService {
    createCar = (car) => {
        return axios.post(CAR_API_URL + '/add/', car)
    }
    updateCar = (carId, car) => {
        return axios.put(CAR_API_URL + '/update/' + carId, car)
    }
    deleteCar = (carId) => {
        return axios.delete( CAR_API_URL + '/delete/' + carId)
    }
    getCars = () => {
        return axios.get(CAR_API_URL);
    }
    getCarById = (carId) => {
        return axios.get(CAR_API_URL + '/id/' + carId)
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