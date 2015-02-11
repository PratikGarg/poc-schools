package com.schooling.publisher.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.schooling.publisher.model.Post;

@Repository
public interface PostRepository extends JpaRepository<Post, Long> {

}
