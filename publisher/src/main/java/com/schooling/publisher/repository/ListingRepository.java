package com.schooling.publisher.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.schooling.publisher.model.Listing;

@Repository
public interface ListingRepository extends JpaRepository<Listing, Long> {

}
