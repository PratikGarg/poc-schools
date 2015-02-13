package com.schooling.publisher.controller;

import java.util.List;
import java.util.concurrent.ExecutionException;

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
import com.schooling.publisher.service.ElasticSearchServiceImpl;

@RestController
@RequestMapping(value = Constants.URI_API)
public class ListingController {
	private static final Logger log = LoggerFactory
			.getLogger(ListingController.class);

	@Inject
	private ListingRepository listingRepository;

	@Inject
	private ElasticSearchServiceImpl elasticSearchService;
	
	@RequestMapping(value = "/listing", method = RequestMethod.POST)
	@ResponseBody
	public ResponseEntity<ResponseMessage> createPost(
			@RequestBody Listing listing) throws InterruptedException, ExecutionException {
		if (log.isDebugEnabled()) {
			log.debug("create a new post");
		}
		
		listing.setData(listing.getContent().toString());
		Listing saved = listingRepository.save(listing);
		saved.getContent().put("id", saved.getId());
		elasticSearchService.index(saved.getContent(), listing.getId().toString());

		if (log.isDebugEnabled()) {
			log.debug("saved post id is @" + saved.getId());
		}

		return new ResponseEntity<ResponseMessage>(
				ResponseMessage.success("post.created"), HttpStatus.CREATED);
	}

	
	@RequestMapping(value = "/listing", method = RequestMethod.GET)
	@ResponseBody
	public ResponseEntity<List<Listing>> getAllPosts() {
		if (log.isDebugEnabled()) {
			log.debug("get all listings");
		}

		List<Listing> listing = listingRepository.findAll();

		if (log.isDebugEnabled()) {
			log.debug("get posts size @" + listing.size());
		}

		return new ResponseEntity<List<Listing>>(listing, HttpStatus.OK);
	}

}
