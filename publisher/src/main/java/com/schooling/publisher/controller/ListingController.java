package com.schooling.publisher.controller;

import javax.inject.Inject;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.schooling.publisher.constant.Constants;
import com.schooling.publisher.model.Listing;
import com.schooling.publisher.repository.ListingRepository;

@RestController
@RequestMapping(value = Constants.URI_API)
public class ListingController {
	private static final Logger log = LoggerFactory
			.getLogger(ListingController.class);

	@Inject
	private ListingRepository listingRepository;

	
	@RequestMapping(value = "/listing", method = RequestMethod.POST)
	@ResponseBody
	public ResponseEntity<ResponseMessage> createPost(@RequestBody Listing listing) {
		if (log.isDebugEnabled()) {
			log.debug("create a new post");
		}

		Listing saved = listingRepository.save(listing);

		if (log.isDebugEnabled()) {
			log.debug("saved post id is @" + saved.getId());
		}

		return new ResponseEntity<ResponseMessage>(
				ResponseMessage.success("post.created"),
				HttpStatus.CREATED);
	}
	
	

}
