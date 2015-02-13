package com.schooling.publisher.controller;

import java.util.HashMap;

import javax.inject.Inject;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.schooling.publisher.constant.Constants;
import com.schooling.publisher.model.City;
import com.schooling.publisher.repository.CityRepository;

@RestController
@RequestMapping(value = Constants.URI_API)
public class CityController {
	private static final Logger log = LoggerFactory
			.getLogger(CityController.class);

	@Inject
	private CityRepository cityRepository;

	
	@RequestMapping(value = "/city/{id}", method = RequestMethod.GET)
	@ResponseBody
	public ResponseEntity<HashMap<String,Object>> getState(@PathVariable("id") Long id) {
		if (log.isDebugEnabled()) {
			log.debug("get postsinfo by id @" + id);
		}

		City city = cityRepository.findOne(id);

		if (log.isDebugEnabled()) {
			log.debug("get post @" + city);
		}
		
		HashMap<String, Object> hashMap = new HashMap<String, Object>();
		hashMap.put("locations", city.getLocations());
		
		return new ResponseEntity<HashMap<String,Object>>(hashMap, HttpStatus.OK);
	}

}
