package com.schooling.publisher.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.schooling.publisher.model.City;

@Repository
public interface CityRepository extends JpaRepository<City, Long> {

}
