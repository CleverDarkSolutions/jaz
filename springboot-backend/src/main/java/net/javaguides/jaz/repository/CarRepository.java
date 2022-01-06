package net.javaguides.jaz.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import net.javaguides.jaz.model.Car;

import java.util.List;
import java.util.Optional;

@Repository
public interface CarRepository extends JpaRepository<Car, Long>{
    List<Car> findByMakeContaining(String make);
    List<Car> findByColourContaining(String colour);
    List<Car> findByModelContaining(String model);
    List<Car> findByYear(String year);
    List<Car> findByCostBetween(String lower, String upper);
}
