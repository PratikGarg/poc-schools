package com.schooling.publisher.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.schooling.publisher.model.Country;

@Repository
public interface CountryRepository extends JpaRepository<Country, Long> {

}
