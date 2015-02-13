package com.schooling.publisher.controller;

import java.util.HashMap;
import java.util.List;

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
import com.schooling.publisher.model.State;
import com.schooling.publisher.repository.StateRepository;

@RestController
@RequestMapping(value = Constants.URI_API)
public class StateController {
	private static final Logger log = LoggerFactory
			.getLogger(StateController.class);

	@Inject
	private StateRepository stateRepository;

	@RequestMapping(value = "/state", method = RequestMethod.GET)
	@ResponseBody
	public ResponseEntity<List<State>> getAllStates() {
		if (log.isDebugEnabled()) {
			log.debug("get all posts");
		}

		List<State> states = stateRepository.findAll();

		if (log.isDebugEnabled()) {
			log.debug("get posts size @" + states.size());
		}

		return new ResponseEntity<List<State>>(states, HttpStatus.OK);
	}
	
	
	@RequestMapping(value = "/state/{id}", method = RequestMethod.GET)
	@ResponseBody
	public ResponseEntity<HashMap<String,Object>> getState(@PathVariable("id") Long id) {
		if (log.isDebugEnabled()) {
			log.debug("get postsinfo by id @" + id);
		}

		State state = stateRepository.findOne(id);

		if (log.isDebugEnabled()) {
			log.debug("get post @" + state);
		}
		
		HashMap<String, Object> hashMap = new HashMap<String, Object>();
		hashMap.put("cities", state.getCities());
		
		return new ResponseEntity<HashMap<String,Object>>(hashMap, HttpStatus.OK);
	}

}
