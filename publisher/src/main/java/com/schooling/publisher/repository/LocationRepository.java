package com.schooling.publisher.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.schooling.publisher.model.Location;

@Repository
public interface LocationRepository extends JpaRepository<Location, Long> {

}
