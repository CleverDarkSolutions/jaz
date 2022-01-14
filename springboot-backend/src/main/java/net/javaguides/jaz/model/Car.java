package net.javaguides.jaz.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "car", schema = "jaz")
public class Car {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "make")
	private String make;

	@Column(name = "model")
	private String model;
	
	@Column(name = "colour")
	private String colour;

	@Column(name = "cost")
	private String cost;

	@Column(name = "year")
	private String year;
	
	public Car() {
		
	}

	public Car(long id, String make, String model, String colour, String cost, String year) {
		this.id = id;
		this.make = make;
		this.model = model;
		this.colour = colour;
		this.cost = cost;
		this.year = year;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getMake() {
		return make;
	}

	public void setMake(String make) {
		this.make = make;
	}

	public String getModel() {
		return model;
	}

	public void setModel(String model) {
		this.model = model;
	}

	public String getColour() {
		return colour;
	}

	public void setColour(String colour) {
		this.colour = colour;
	}

	public String getCost() {
		return cost;
	}

	public void setCost(String cost) {
		this.cost = cost;
	}

	public String getYear() {
		return year;
	}

	public void setYear(String year) {
		this.year = year;
	}

}
