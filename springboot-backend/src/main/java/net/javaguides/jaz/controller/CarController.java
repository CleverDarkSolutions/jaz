package net.javaguides.jaz.controller;

import com.speedment.jpastreamer.application.JPAStreamer;
import net.javaguides.jaz.exception.ResourceNotFoundException;
import net.javaguides.jaz.model.Car;
import net.javaguides.jaz.repository.CarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class CarController {

	@Autowired
	private CarRepository carRepository;

	@GetMapping("/cars")
	public List<Car> getAllCars(){
		return carRepository.findAll();
	}		

	@PostMapping("/cars/add")
	public ResponseEntity<Car> createCar(@RequestBody Car newCar) {
		Car car = carRepository.save(newCar);
		return ResponseEntity.ok(car);
	}

	@GetMapping("/cars/id/{id}")
	public ResponseEntity<Car> getCarById(@PathVariable Long id) {
		Car car = carRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Car not exist with id :" + id));
		return ResponseEntity.ok(car);
	}

	@GetMapping("/cars/color/{color}")
	public ResponseEntity<List<Car>> getCarByColor(@PathVariable String color) {
		List<Car> car = carRepository.findByColourContaining(color);
		return ResponseEntity.ok(car);
	}

	@GetMapping("/cars/make/{make}")
	public ResponseEntity<List<Car>> getCarByMake(@PathVariable String make) {
		List<Car> car = carRepository.findByMakeContaining(make);
		return ResponseEntity.ok(car);
	}

	@GetMapping("/cars/model/{model}")
	public ResponseEntity<List<Car>> getCarByModel(@PathVariable String model) {
		List<Car> car = carRepository.findByModelContaining(model);
		return ResponseEntity.ok(car);
	}

	@GetMapping("/cars/year/{year}")
	public ResponseEntity<List<Car>> getCarByYear(@PathVariable String year) {
		List<Car> car = carRepository.findByYear(year);
		return ResponseEntity.ok(car);
	}
	
	@PutMapping("/cars/update/{id}")
	public ResponseEntity<Car> updateCar(@PathVariable Long id, @RequestBody Car carDetails){
		Car car = carRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Car not exist with id :" + id));
		
		car.setMake(carDetails.getMake());
		car.setColour(carDetails.getColour());
		car.setModel(carDetails.getModel());
		car.setCost(carDetails.getCost());
		car.setYear(carDetails.getYear());
		
		Car updatedCar = carRepository.save(car);
		return ResponseEntity.ok(updatedCar);
	}
	
	// delete Car rest api
	@DeleteMapping("/cars/delete/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteCar(@PathVariable Long id){
		Car car = carRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Car not exist with id :" + id));
		
		carRepository.delete(car);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}

	
}
